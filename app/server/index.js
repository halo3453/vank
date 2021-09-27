/*import config from 'config';*/
import Koa from 'koa';
import Logger from 'pino';
import controllers from '../controllers';
import routes from '../routes';
import handleErrors from './error';
import koaLogger from 'koa-logger';
import bodyparser from 'koa-bodyparser';
import initDB from '../database/init'
import Customer from '../database/customers/customer';
import Invoice from '../database/invoices/invoice';

export default function initServer() {
  initDB();
  const app = new Koa();
  const logger = Logger().child({ module: 'vank' });

  app.use(koaLogger({
    transporter: (srt, [, method, url, status, time, length]) => {
      logger.info({
        time,
        url,
        method,
        status,
        length,
        http: status ? 'response' : 'request',
      });
    },
  }));

  app.use(handleErrors);
 
  app.context.logger = Logger();
  const models = {
    customer: Customer,
    invoice: Invoice
  }
  app.context.models = models;
  app.use(bodyparser());
  const router = routes(controllers);

  app.use(router.routes());
  app.use(router.allowedMethods());
 

  const port = 3001;
  app.server = app.listen(port, () => { logger.info(`Server up listening on port ${port}`); });

  app.server.on('error', (error) => {
    logger.error({ error });
  });

  app.server.on('close', () => {
    logger.info('shutting down server...');
  });

  return app;
}
