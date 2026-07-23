import fs from 'fs';

const HOST = 'jcofabrics.com';
const KEY = '3a9f1745bd76f2a84633005cd1710242';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// Submits every URL in the sitemap to IndexNow (Bing/Yandex/etc.) on every
// deploy so updated or new pages get picked up faster than waiting on
// crawl schedule. Best-effort: a failure here should not fail the build.
async function run() {
  const sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
  const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

  if (urlList.length === 0) {
    console.log('indexnow: no URLs found in sitemap, skipping');
    return;
  }

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: KEY_LOCATION,
        urlList,
      }),
    });
    console.log(`indexnow: submitted ${urlList.length} URLs, status ${res.status}`);
  } catch (err) {
    console.warn('indexnow: submission failed (non-blocking):', err.message);
  }
}

run();
