const api = require('../../src/config/api');

const getOrg = async () => {
  return api
    .get('takenet/repos?type=owner&page=1&per_page=1')
    .then(res => res)
    .catch(error => console.log(error));
};

module.exports = {
  getOrg
};
