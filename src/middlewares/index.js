const { logger } = require('./logger');
const cachingMiddleware  = require('./caching');
const { responseMiddleware } = require('./response');

module.exports = {
  logger,
  cachingMiddleware,
  responseMiddleware
};
