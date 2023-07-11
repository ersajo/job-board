const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();

router.get('/', UserController.getAll);
router.get('/:id', UserController.getOne);
router.post('/', UserController.createOne);
router.put('/:id', UserController.updateOne);
router.delete('/:id', UserController.deleteOne);

module.exports = router;