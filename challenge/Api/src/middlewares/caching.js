const ExpressRedisCache = require('express-redis-cache');
const { logger } = require('./logger');

/**
 * create a middleware to cache the response
 */

const cachingMiddleware = ExpressRedisCache({
  port: process.env.REDIS_PORT,
  host: process.env.REDIS_HOST,
  auth_pass: process.env.REDIS_PASS || null,
});


cachingMiddleware.on('message', (message) => {
  logger.info(`ExpressRedis: ${message}`);
});

cachingMiddleware.on('connected', () => {
  logger.info('Client connected to Redis');
});

cachingMiddleware.on('error', (error) => {
  logger.error(`ExpressRedis: ${error}`);
});

cachingMiddleware.on('disconnected', () => {
  logger.warn('Client disconnected from Redis');
});

module.exports = cachingMiddleware;
