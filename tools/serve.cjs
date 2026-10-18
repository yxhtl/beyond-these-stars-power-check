'use strict';
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const files = new Set(['index.html', 'zh.html', 'style.css', 'app.js']);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8' };
http.createServer((req, res) => {
  const file = new URL(req.url, 'http://localhost').pathname.slice(1) || 'index.html';
  if (!['GET', 'HEAD'].includes(req.method) || !files.has(file)) {
    res.writeHead(404); res.end('Not found'); return;
  }
  fs.readFile(path.join(root, file), (err, body) => {
    if (err) { res.writeHead(500); res.end('Read failed'); return; }
    res.writeHead(200, { 'Content-Type': types[path.extname(file)], 'Cache-Control': 'no-store' });
    res.end(req.method === 'HEAD' ? undefined : body);
  });
}).listen(8767, '127.0.0.1', () => console.log('Preview: http://127.0.0.1:8767/zh.html'));
