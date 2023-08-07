// 2 endpoints definieren
// 1. ophalen van alle ritten
// 2. update van een rit

const Router = require('@koa/router');
const rittenService = require('../service/ritten');

const getRitten = async (ctx) => {
  ctx.body = await rittenService.getAll();
};

const updateRit = async (ctx) => {
  ctx.body = rittenService.updateById(ctx.params.id, ctx.request.body);
};

module.exports = (app) => {
  const router = new Router({prefix: '/ritten'});
  router.get('/', getRitten);
  router.put('/:id', updateRit);
  app.use(router.routes());
  app.use(router.allowedMethods());
}
