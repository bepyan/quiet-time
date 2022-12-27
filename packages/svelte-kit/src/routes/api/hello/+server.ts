import { error } from '@sveltejs/kit';

export function GET() {
  const product = {
    name: 'sticker',
    src: 'https://cdn.shopify.com/s/files/1/0434/0285/4564/products/Cup-front-black.png?v=1623159405',
    price: '$10',
  };

  if (!product) {
    throw error(400, 'No product exists.');
  }

  return new Response(JSON.stringify(product));
}
