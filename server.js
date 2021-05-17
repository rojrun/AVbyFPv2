require('isomorphic-fetch');
const dotenv = require('dotenv');
const Koa = require('koa');
const next = require('next');
// const {default: createShopifyAuth} = require('@shopify/koa-shopify-auth');
const {shopifyAuth} = require('@shopify/koa-shopify-auth');
const {verifyRequest} = require('@shopify/koa-shopify-auth');
const {default: Shopify, ApiVersion} = require('@shopify/shopify-api');
const Router = require('koa-router');

const result = dotenv.config({debug: true});
if (result.error) {
  throw result.error;
}
console.log("dot result: ", result.parsed); 
console.log("dot error: ", result.error);

Shopify.Context.initialize({
  API_KEY: process.env.SHOPIFY_API_KEY,
  API_SECRET_KEY: process.env.SHOPIFY_API_SECRET,
  SCOPES: process.env.SHOPIFY_API_SCOPES.split(","),
  HOST_NAME: process.env.SHOPIFY_APP_URL.replace(/https:\/\//, ""),
  API_VERSION: ApiVersion.October20,
  IS_EMBEDDED_APP: true,
  SESSION_STORAGE: new Shopify.Session.MemorySessionStorage(),
});
console.log("shopify: ", Shopify.Context);

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev: dev});
const handle = app.getRequestHandler();

const ACTIVE_SHOPIFY_SHOPS = {};

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();
  server.keys = [Shopify.Context.API_SECRET_KEY];
  console.log("server keys: ", server.keys);
  server.use(
    // createShopifyAuth({
    shopifyAuth({  
      // afterAuth(ctx) {
      async afterAuth(ctx) {  
        const {shop, scope} = ctx.state.shopify;
        console.log("shop: ", shop);
        console.log("scope: ", scope);
        ACTIVE_SHOPIFY_SHOPS[shop] = scope;
        
        if (ACTIVE_SHOPIFY_SHOPS[shop]) {
          ctx.redirect(`https://${shop}/admin/apps`);
        } else {
          ctx.redirect(`/?shop=${shop}`);
        }  
      },
    }),
  );

  const handleRequest = async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
  };
  console.log("handleRequest: ", handleRequest);
  router.get("/", async (ctx) => {
    const shop = ctx.query.shop;

    if (ACTIVE_SHOPIFY_SHOPS[shop] === undefined) {
      ctx.redirect(`/auth?shop=${shop}`);
    } else {
      await handleRequest(ctx);
    }
  });

  router.get("(/_next/static/.*)", handleRequest);
  router.get("/_next/webpack-hmr", handleRequest);
  router.get("(.*)", verifyRequest(), handleRequest);

  server.use(router.allowedMethods());
  server.use(router.routes());

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
