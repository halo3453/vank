export default async function handleErrors(ctx, next) {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;

    const errorBody = {
      message: err.message,
    };

    const isKnownError = [401, 402, 404, 409, 422].includes(err.status);

    if (!isKnownError && process.env.NODE_ENV !== 'production') {
      const stack = err.stack && err
        .stack
        .split('\n')
        .filter((l) => !l.match(/(node_modules|\(native\)|next_tick)/))
        .reverse();

      if (stack) {
        errorBody.message = 'error';
      }
    }

    ctx.body = errorBody;

    if (!isKnownError) {
      ctx.app.emit('error', err, ctx);
    }
  }
}
