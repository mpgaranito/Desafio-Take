const api = require('../../config/api');
const { logger } = require('../../middlewares');

/**
 *
 * @function getOrg
 * @returns {Promise<Object>}
 */

const getOrg = async () => {
  try {
    const {
      data
    } = await api.get('takenet/repos?type=owner&page=1&per_page=100');

    const reponse = data.map((repo) => {
      return {
        name: repo.name,
        description: repo.description,
        language: repo.language,
        created_at: repo.created_at,
      };
    });

    return validateObject(reponse);
  } catch (err) {
    logger.error('request in error!');
  }
};

/**
 *
 * @param {Object} reponse
 */

const validateObject = async (reponse) => {
  try {
    return reponse.slice(0, 5).sort(({created_at, language }) => {
      if (language === 'C#')
      return new Date(created_at) - new Date(created_at);
    });
  } catch (err) {
    logger.error('error in validating!');
  }
};


module.exports = {
  getOrg
};
