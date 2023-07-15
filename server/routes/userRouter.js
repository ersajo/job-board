const express = require('express');
const UserController = require('../controllers/userController');
const { verifyUserToken } = require('../middleware/index');

const router = express.Router();

router.post('/', UserController.createOne);
router.get('/', verifyUserToken, UserController.getOne);
router.put('/', verifyUserToken, UserController.updateOne);
router.delete('/', verifyUserToken, UserController.deleteOne);

// Company auth
router.post('/login', UserController.login);

module.exports = router;