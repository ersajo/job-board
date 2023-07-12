const express = require('express');
const UserController = require('../controllers/userController');
const { verifyToken } = require('../middleware/index');

const router = express.Router();

router.get('/', verifyToken, UserController.getAll);
router.get('/me', verifyToken, UserController.getOne);
router.post('/', UserController.createOne);
router.put('/me', verifyToken, UserController.updateOne);
router.delete('/:id', verifyToken, UserController.deleteOne);

module.exports = router;