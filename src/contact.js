import { CONFIG } from './config.js';

export async function contactSeller(seller) {
  console.log(`Contacting seller: ${seller.name || seller.phone || seller.id}`);
}
