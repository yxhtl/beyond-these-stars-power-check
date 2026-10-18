'use strict';
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const base = 'https://yxhtl.github.io/beyond-these-stars-power-check/';
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
for (const file of ['index.html', 'zh.html']) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  assert(html.includes(`<link rel="canonical" href="${base}${file === 'index.html' ? '' : file}">`));
  assert(html.includes(`hreflang="en" href="${base}"`));
  assert(html.includes(`hreflang="zh-CN" href="${base}zh.html"`));
  assert(sitemap.includes(`<loc>${base}${file === 'index.html' ? '' : file}</loc>`));
  assert(!html.includes('\uFFFD'), 'Invalid text encoding');
  for (const match of html.matchAll(/(?:href|src)="([^"#][^"]*)"/g)) {
    const url = match[1];
    if (/^(https?:|data:|mailto:)/.test(url)) continue;
    assert(fs.existsSync(path.join(root, url)), `Missing local resource: ${url}`);
  }
  assert.equal(fs.readFileSync(path.join(root, 'docs', file), 'utf8'), html, 'Published copy must match source');
}
assert.equal((sitemap.match(/<loc>/g) || []).length, 2);
console.log('静态检查通过：中英 canonical、hreflang、sitemap、本地资源与发布副本。');
