/**
 * Response injection middleware
 */
const responseMiddleware = (req, res, next) => {
  /**
   * Response injection middleware
   */
  res.parseReturn = ({ message = null, status = 200, data = null }) =>
    res.status(status).json({
      message,
      status,
      data,
    });
  next();
};

module.exports = { responseMiddleware };
