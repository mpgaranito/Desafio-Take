const api = require('../../src/config/api');
const { logger } = require('../../src/middlewares');

const getOrg = async () => {
  return api
    .get('takenet/repos?type=owner&page=1&per_page=1')
    .then(res => res)
    .catch(error => logger.error(error));
};

module.exports = {
  getOrg,
};
