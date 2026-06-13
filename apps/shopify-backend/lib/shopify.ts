import '@shopify/shopify-api/adapters/web-api';
import { shopifyApi, ApiVersion, type Shopify } from '@shopify/shopify-api';
import { MemorySessionStorage } from '@shopify/shopify-app-session-storage-memory';

export const shopify: Shopify = shopifyApi({
  apiKey: process.env.SHOPIFY_API_KEY || 'dummy_api_key',
  apiSecretKey: process.env.SHOPIFY_API_SECRET || 'dummy_api_secret',
  scopes: ['read_products', 'write_products', 'read_orders', 'read_customers'],
  hostName: process.env.HOST ? process.env.HOST.replace(/https?:\/\//, '') : (process.env.VERCEL_PROJECT_PRODUCTION_URL || 'stylique-beauty.vercel.app'),
  hostScheme: 'https',
  apiVersion: ApiVersion.January25,
  isEmbeddedApp: true,
  sessionStorage: new MemorySessionStorage(),
});
