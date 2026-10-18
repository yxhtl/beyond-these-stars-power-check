'use strict';
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const source = fs.readFileSync(path.resolve(__dirname, '../analytics.js'), 'utf8');
const cases = [
  ['yxhtl.github.io', '/beyond-these-stars-power-check/', true],
  ['yxhtl.github.io', '/beyond-these-stars-power-check/zh.html', true],
  ['yxhtl.github.io', '/paperhead-survival-guide/', false],
  ['yxhtl.github.io', '/doubao-voice-check/', false],
  ['127.0.0.1', '/beyond-these-stars-power-check/', false],
  ['localhost', '/beyond-these-stars-power-check/', false]
];
for (const [hostname, pathname, allowed] of cases) {
  const scripts = [];
  const context = { URL, location: { hostname, pathname, href: `https://${hostname}${pathname}?analytics_debug=1` },
    document: { createElement: () => ({}), head: { appendChild: node => scripts.push(node) } } };
  context.window = context;
  vm.runInNewContext(source, context);
  assert.equal(scripts.length, allowed ? 1 : 0, 'Preview and other sites must not report to this property.');
  if (allowed) {
    assert(scripts[0].src.endsWith('G-7SWJCZGP6J'));
    const config = context.dataLayer.find(args => args[0] === 'config')[2];
    assert.equal(config.cookie_path, '/beyond-these-stars-power-check/');
    assert.equal(config.allow_google_signals, false);
    assert.equal(config.allow_ad_personalization_signals, false);
    assert.equal(config.debug_mode, true);
    assert(!config.page_location.includes('analytics_debug'));
  } else assert.equal(context.gtag, undefined);
}
const events = [];
const options = ['connection', 'stopped', 'input', 'moved'].map(key => ({ dataset: { symptom: key },
  setAttribute() {}, addEventListener(type, callback) { this.click = callback; } }));
const panels = options.map(button => ({ dataset: { answer: button.dataset.symptom } }));
const appContext = { document: { querySelectorAll: selector => selector === '[data-symptom]' ? options : panels },
  window: { gtag: (...args) => events.push(args) } };
vm.runInNewContext(fs.readFileSync(path.resolve(__dirname, '../app.js'), 'utf8'), appContext);
assert.equal(events.length, 0, 'Default checklist is not an actual tool use.');
options[1].click(); options[2].click();
assert.equal(events.length, 2, 'Repeated selections must not inflate first-use events.');
assert.deepEqual(events.map(args => args[1]), ['check_start', 'recommendation_view']);
for (const args of events) assert.deepEqual(Object.keys(args[2]), ['send_to'], 'Do not upload the selected symptom.');
console.log('统计检查通过：独立 ID、路径 Cookie、本地和其他站不采集；仅首次真实点击计数、不上传选项。');
