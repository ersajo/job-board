const Sequelize = require('sequelize');
const db = require('../util/database');

const Opportunity = require('./opportunityModel');
const User = require('./userModel');

const Bookmark = db.define('bookmarks', {
  userId: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
  },
  opportunityId: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
  },
});

Bookmark.belongsTo(Opportunity, { foreignKey: 'opportunityId' });
Opportunity.hasMany(Bookmark, { foreignKey: 'opportunityId' });
Bookmark.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Bookmark, { foreignKey: 'userId' });

module.exports = Bookmark;