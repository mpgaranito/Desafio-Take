const { getOrg } = require('./get-org-models');
const Util = require('../../utils/Utils');

const util = new Util();

/**
 * The OrgController Controller.
 *
 * @method show returns old repositories from C#
 */

class OrgController {
  async show(req, res) {
    try {
      const data = await getOrg();

      if (data) {
        util.setSuccess(200, data);
      }

      return util.send(res);
    } catch (err) {
      util.setError(500, err.message);
      return util.send(res);
    }
  }
}

module.exports = OrgController;
