const router = require('express').Router();
const OrgController = require('./get-org-controller');
const { cachingMiddleware } = require('../../middlewares');

const orgController = new OrgController();

router.get('/get-repos-take', cachingMiddleware.route('@key', 60), orgController.show);

module.exports = router;
