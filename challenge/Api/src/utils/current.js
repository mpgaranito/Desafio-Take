const moment = require('moment-timezone');

/**
 * Date and time now, time zone, formatted
 * @function DatetimeNow
 */

const datetimeNow = () => {
  const now = moment().tz('America/Sao_Paulo');

  return {
    DatetimeNow: now.format('DD-MM-YYYY HH-mm-ss'),
  };
};

module.exports = {
  datetimeNow,
};
