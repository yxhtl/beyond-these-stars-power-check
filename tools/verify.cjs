'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('C:/Users/tk212/.agents/skills/playwright-skill/node_modules/playwright');
const base = process.env.SITE_TEST_URL || 'http://127.0.0.1:8767';
const proof = path.resolve(__dirname, '../proof');

(async () => {
  fs.mkdirSync(proof, { recursive: true });
  const browser = await chromium.launch({ headless: false });
  const failures = [];
  const network = [];
  try {
    const context = await browser.newContext();
    const page = await context.newPage();
    page.on('pageerror', err => failures.push(err.message));
    page.on('request', req => { if (new URL(req.url()).origin !== new URL(base).origin) network.push(req.url()); });
    for (const file of ['index.html', 'zh.html']) {
      for (const width of [1440, 390]) {
        await page.setViewportSize({ width, height: 960 });
        assert.equal((await page.goto(`${base}/${file}`)).status(), 200);
        assert.equal(await page.locator('h1').count(), 1);
        for (const key of ['connection', 'stopped', 'input', 'moved']) {
          await page.locator(`[data-symptom="${key}"]`).click();
          assert.equal(await page.locator('.answer:visible').count(), 1, 'A symptom must produce one unambiguous checklist.');
          assert.equal(await page.locator(`[data-answer="${key}"]`).isVisible(), true);
          assert.equal(await page.locator(`[data-symptom="${key}"]`).getAttribute('aria-pressed'), 'true');
          assert.equal(await page.locator(`[data-answer="${key}"] li`).count(), 3);
        }
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), true, 'A player on a phone must not need horizontal scrolling.');
        await page.locator('[data-symptom="connection"]').click();
        await page.screenshot({ path: path.join(proof, `${file === 'index.html' ? 'en' : 'zh'}-${width}.png`), fullPage: true });
      }
      await page.locator('.lang').click();
      assert.equal(await page.locator('html').getAttribute('lang'), file === 'index.html' ? 'zh-CN' : 'en');
    }
    const noJS = await browser.newContext({ javaScriptEnabled: false });
    for (const file of ['index.html', 'zh.html']) {
      const fallback = await noJS.newPage();
      await fallback.goto(`${base}/${file}`);
      assert.equal(await fallback.locator('.answer:visible').count(), 4, 'Core help remains readable without JavaScript.');
      await fallback.close();
    }
    // Native buttons must work from a keyboard, not only a mouse.
    await page.goto(`${base}/zh.html`);
    await page.locator('[data-symptom="stopped"]').focus();
    await page.keyboard.press('Enter');
    assert.equal(await page.locator('[data-answer="stopped"]').isVisible(), true);
    assert.deepEqual(failures, []);
    assert.deepEqual(network, [], 'The MVP must not send analytics or load paid/external dependencies.');
    console.log('PASS: bilingual branches, 1440/390 widths, language links, no-JS fallback, keyboard, no external requests, no page errors.');
  } finally { await browser.close(); }
})().catch(err => { console.error(err); process.exitCode = 1; });
