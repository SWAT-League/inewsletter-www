'use strict';

module.exports = () => {
  return async function respnoseTime(ctx, next) {
    await next();
    ctx.logger.info(`response time: ${Date.now() - ctx.starttime}`);
  };
};
