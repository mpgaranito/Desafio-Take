const router = require('express').Router();
const OrgController = require('./get-org-controller');

const orgController = new OrgController();

router.get('/get-repos-take', orgController.show);

module.exports = router;
