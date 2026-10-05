// Builds the installable iPhone web app into docs/ (GitHub Pages can serve that folder directly).
// src/app.html is the whole app; this wraps it with the PWA head (manifest, icons, iOS meta) and the service worker.
import { readFile, writeFile, mkdir, cp, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'docs');
const app = await readFile(path.join(root, 'src/app.html'), 'utf8');

// Everything up to the end of the first <style> block (title, font links, CSS) belongs in <head>.
const cut = app.indexOf('</style>') + '</style>'.length;
const headPart = app.slice(0, cut).trim();
const bodyPart = app.slice(cut).trim();

const html = `<!doctype html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="description" content="Ghi giờ làm thêm, tính tổng theo tuần/tháng và cảnh báo khi vượt 28 giờ/tuần.">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-title" content="Arubaito">
<meta name="format-detection" content="telephone=no">
<meta name="theme-color" content="#F0F0F1" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0E0E0F" media="(prefers-color-scheme: dark)">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" type="image/png" href="icons/icon-192.png">
<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">
<style>:root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>
${headPart}
</head>
<body>
${bodyPart}
<script>
if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}
</script>
</body>
</html>
`;

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
await writeFile(path.join(out, 'index.html'), html);
await cp(path.join(root, 'public'), out, { recursive: true });
const version = new Date().toISOString().replace(/\D/g, '').slice(0, 14);
const sw = (await readFile(path.join(root, 'public/sw.js'), 'utf8')).replace('__VERSION__', version);
await writeFile(path.join(out, 'sw.js'), sw);
await writeFile(path.join(out, '.nojekyll'), '');
console.log(`Built docs/ (version ${version})`);
