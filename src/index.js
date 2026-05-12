import { scrapeReklama5 } from './scraper.js';
import { CONFIG } from './config.js';

async function main() {
  console.log('=== reklama5-extractor ===');
  console.log('Source:', CONFIG.reklama5.baseUrl);
  console.log('Target:', CONFIG.kupiprodadi.baseUrl);

  const ads = await scrapeReklama5();
  console.log(`Scraped ${ads.length} ads`);
}

main().catch(console.error);
