const express = require('express');
const JobController = require('../controllers/jobController');
const { verifyUserToken } = require('../middleware/index');

const router = express.Router();

router.get('/', verifyUserToken, JobController.getAll);

module.exports = router;