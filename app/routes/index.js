import Router from '@koa/router';
import customers from './customers';
import invoices from './invoices';

const subrouters = {
  customers,
  invoices,
};

export default function routes(controllers) {
  return Object.entries(subrouters)
    .reduce((accRouters, [name, router]) => {
      const subRouter = router(Router, controllers[name]);
      accRouters.use(`/${name}`, subRouter.routes(), subRouter.allowedMethods());
      return accRouters;
    }, new Router({ prefix: '/vank-api' }));
}
