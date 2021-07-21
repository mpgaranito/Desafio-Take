const router = require('express').Router();
const OrgController = require('./get-org-controller');
const { cachingMiddleware } = require('../../middlewares');

const orgController = new OrgController();

router.get('/get-repos-take', cachingMiddleware.route(), orgController.show);

module.exports = router;
