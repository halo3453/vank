export default function customersRouter(Router, controllers ={}) {
  const router = new Router();

  router.get(
    '/', (ctx) => { ctx.body = 'Vank API'; },
  );

  router.post(
    '/', controllers.create,
  );

  router.patch(
    '/', controllers.update,
  );

  return router;
}
