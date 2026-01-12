import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event));
});

async function handleRequest(event) {
  try {
    // Try to serve the static asset from KV
    return await getAssetFromKV(event);
  } catch (e) {
    // If the asset is not found, return a 404 response
    return new Response('Not Found', { status: 404 });
  }
}   