export default function invoicesRouter(Router, controllers ={}) {
  const router = new Router();

  router.get(
    '/', (ctx) => { ctx.body = 'Vank API'; },
  );

  router.post(
    '/', controllers.fetch,
  );

  return router;
}
