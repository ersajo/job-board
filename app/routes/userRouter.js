const express = require('express');
const UserController = require('../controllers/userController');
const { verifyToken } = require('../middleware/index');

const router = express.Router();

router.post('/', UserController.createOne);
router.get('/', verifyToken, UserController.getOne);
router.put('/', verifyToken, UserController.updateOne);
router.delete('/', verifyToken, UserController.deleteOne);
router.post('/login', UserController.login);

module.exports = router;