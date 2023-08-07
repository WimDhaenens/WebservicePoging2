const installTreinenRoutes = require('./_treinen');
const installRittenRoutes = require('./_ritten');
const installHealthRoutes = require('./_health');
const Router = require('@koa/router');

module.exports = (app) => {
  const router = new Router({
    prefix: '/api'
  });
  installTreinenRoutes(router);
  installRittenRoutes(router);
  installHealthRoutes(router);
  app.use(router.routes());
  app.use(router.allowedMethods());
}