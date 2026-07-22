import puppeteer from 'puppeteer';
import { preview } from 'vite';
import fs from 'fs';
import path from 'path';

const ROUTES = [
  '/', '/about', '/fabrics', '/fabrics/cotton', '/fabrics/linen',
  '/fabrics/jacquard', '/fabrics/yarn-dyed', '/fabrics/upholstery',
  '/fabrics/viscose', '/fabrics/dobby', '/fabrics/certified',
  '/fabrics/crepe', '/fabrics/twill', '/fabrics/indigo', '/fabrics/lurex',
  '/fabrics/ikat', '/fabrics/lycra-blends', '/request-samples',
  '/clientele', '/production', '/export', '/certifications', '/showroom',
  '/sampling', '/fabric-sourcing-guide', '/contact', '/blog',
  '/blog/woven-fabric-manufacturers-india-buyers-guide-2026',
  '/blog/gots-certified-fabric-india-brand-guide',
  '/blog/jacquard-fabric-guide-fashion-buyers',
  '/blog/linen-fabric-sourcing-india-vs-europe-vs-china',
  '/blog/what-is-bci-cotton-guide-textile-buyers',
  '/blog/upholstery-home-furnishing-fabric-sourcing-india',
  '/blog/yarn-dyed-vs-piece-dyed-fabric-guide',
  '/blog/how-to-source-fabric-directly-indian-mill',
  '/blog/dobby-fabric-uses-construction-sourcing-guide',
  '/blog/sustainable-fabric-sourcing-india-certifications',
  '/blog/minimum-order-quantity-fabric-india',
  '/blog/how-to-request-fabric-samples-india',
  '/blog/fabric-export-documentation-india',
  '/blog/cotton-fabric-gsm-guide',
  '/blog/india-vs-china-fabric-sourcing',
];

const DIST = path.resolve('dist');
const PORT = 4173;

async function run() {
  const server = await preview({ preview: { port: PORT }, root: process.cwd() });
  const base = `http://localhost:${PORT}`;

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  for (const route of ROUTES) {
    await page.goto(`${base}${route}`, { waitUntil: 'networkidle0' });
    await new Promise((r) => setTimeout(r, 300));

    // react-helmet-async injects the page-specific description/OG/Twitter
    // tags (marked data-rh="true") but does not remove the static
    // homepage-generic ones baked into the source index.html. Without this
    // cleanup every route would end up with two <meta name="description">
    // tags etc., and non-JS parsers often read the first (wrong) one.
    await page.evaluate(() => {
      const dedupeSelectors = [
        'meta[name="description"]',
        'meta[property="og:title"]',
        'meta[property="og:description"]',
        'meta[property="og:url"]',
        'meta[name="twitter:title"]',
        'meta[name="twitter:description"]',
      ];
      for (const selector of dedupeSelectors) {
        const stale = document.head.querySelector(`${selector}:not([data-rh])`);
        const fresh = document.head.querySelector(`${selector}[data-rh]`);
        if (stale && fresh) stale.remove();
      }
    });

    const html = await page.content();

    const outDir = route === '/' ? DIST : path.join(DIST, route);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html);
    console.log(`prerendered ${route}`);
  }

  await browser.close();
  await new Promise((resolve) => server.httpServer.close(resolve));
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
