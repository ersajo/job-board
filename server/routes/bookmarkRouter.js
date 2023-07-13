const express = require('express');
const BookmarkController = require('../controllers/bookmarkController');
const { verifyUserToken } = require('../middleware/index');

const router = express.Router();

router.post('/', verifyUserToken, BookmarkController.create);
router.get('/', verifyUserToken, BookmarkController.getAllByUser);
router.delete('/:id', verifyUserToken, BookmarkController.deleteOne);

module.exports = router;