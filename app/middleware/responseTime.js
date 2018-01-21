'use strict';

module.exports = () => {
  return async function respnoseTime(ctx, next) {
    const start = new Date();
    await next();

    ctx.logger.info(`response time: ${new Date() - start}`);
  };
};
