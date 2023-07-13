const bookmarkService = require('../services/bookmarkService');

const create = async (req, res) => {
  try {
    const { opportunityId } = req.body;
    const bookmark = await bookmarkService.createOne({
      userId: req.user.id,
      opportunityId,
    });
    return res.status(200).json(bookmark);
  } catch (error) {
    console.log('Error to create bookmark:', error);
    return res.status(500).json({ error: error });
  }
}

const getAllByUser = async (req, res) => {
  try {
    const bookmarks = await bookmarkService.getAllByUser(req.user.id);
    return res.status(200).json(bookmarks);
  } catch (error) {
    console.log('Error to find bookmarks:', error);
    return res.status(500).json({ error: error });
  }
}

const deleteOne = async (req, res) => {
  try {
    const { id } = req.params;
    await bookmarkService.deleteOne(id, req.user.id);
    return res.status(200).json({ message: 'Bookmark deleted successfully' });
  } catch (error) {
    console.log('Error to delete bookmark:', error);
    return res.status(500).json({ error: error });
  }
}

module.exports = {
  create,
  getAllByUser,
  deleteOne,
}