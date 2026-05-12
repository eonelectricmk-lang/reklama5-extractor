import { CONFIG } from './config.js';

export async function scrapeReklama5() {
  console.log('Scraping reklama5.mk...');
  const ads = [];

  for (let page = 1; page <= CONFIG.reklama5.pages; page++) {
    try {
      const url = `${CONFIG.reklama5.baseUrl}/oglasi?page=${page}`;
      const res = await fetch(url);
      const html = await res.text();
      console.log(`Page ${page}: ${html.length} bytes`);
    } catch (err) {
      console.error(`Error scraping page ${page}:`, err.message);
    }
  }

  return ads;
}
