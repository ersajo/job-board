const express = require('express');
const ApplicationController = require('../controllers/applicationController');
const { verifyUserToken } = require('../middleware/index');

const router = express.Router();

router.post('/', verifyUserToken, ApplicationController.create);
router.get('/', verifyUserToken, ApplicationController.getAllByUser);

module.exports = router;