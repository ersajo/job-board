const BookmarkModel = require('../models/bookmarkModel');
const UserModel = require('../models/userModel');
const OpportunityModel = require('../models/opportunityModel');

const createOne = async (bookmark) => {
  try {
    const newBookmark = await BookmarkModel.create(bookmark);
    return newBookmark;
  } catch (error) {
    console.log('Error to create bookmark:', error);
    return null;
  }
}

const getAllByUser = async (userId) => {
  try {
    const bookmarks = await BookmarkModel.findAll({
      where: { userId: userId },
      include: [OpportunityModel, UserModel]
    });
    return bookmarks;
  } catch (error) {
    console.log('Error to find bookmarks:', error);
    return null;
  }
}

const deleteOne = async (opportunityId, userId) => {
  try {
    const deletedBookmark = await BookmarkModel.destroy({
      where: { opportunityId, userId },
    });
    return deletedBookmark;
  } catch (error) {
    console.log('Error to delete bookmark:', error);
    return null;
  }
}

module.exports = {
  createOne,
  getAllByUser,
  deleteOne,
}