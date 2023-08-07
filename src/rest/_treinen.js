const Router = require ('@koa/router');
const treinenService = require ('../service/treinritten');
const { getLogger } = require('../core/logging');

const debugLog = (message, meta = {}) => {
	if (!this.logger) this.logger = getLogger();
	this.logger.debug(message, meta)};


const getTreinen = async (ctx) => {
  debugLog('Alles treinen worden opgehaald...');
  ctx.body = treinenService.getAll();

  //logger.info('U bent bij de api/treinen terecht gekomen...');
};


const createTrein = async (ctx) => {
  ctx.body = treinenService.create({
    ...ctx.request.body
  })
  // ctx.body = "is ontvzangen...";
};

const getTreinById = async (ctx) => {
  //logger.info(ctx.params.id);
  ctx.body = treinenService.getById(ctx.params.id) //opgelet, id is niet geparsed... Is enkel een string

};

const deleteTrein = async (ctx) => {
  treinenService.deleteById(ctx.params.id);
  ctx.status = 204; // delete is gelukt, maar er wordt geen inhoud teruggestuurd...
};

const updateTrein = async (ctx) => {
//  logger.info(ctx.request.body);
 // logger.info(JSON.stringify(ctx.response));
  ctx.body="We werken eraan...";
  //  ctx.body = treinenService.updateById(ctx.params.id,...ctx.request.body);
 ctx.body = treinenService.updateById(ctx.params.id, ctx.request.body);
};

module.exports = (app) => {
  const router = new Router({prefix: '/treinen'}); //misschien moet api weg ????
  router.get('/', getTreinen);
  router.post('/', createTrein);
  router.get('/:id', getTreinById);
  router.delete('/:id', deleteTrein);
  router.put('/:id', updateTrein);
  
  app.use(router.routes());
  app.use(router.allowedMethods());
} 