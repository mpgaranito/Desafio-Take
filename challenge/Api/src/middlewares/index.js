const { logger } = require('./logger');
const cachingMiddleware  = require('./caching');
const { securityMiddleware } = require('./security');
const { responseMiddleware } = require('./response');

module.exports = {
  logger,
  cachingMiddleware,
  securityMiddleware,
  responseMiddleware
};
