const Sequelize = require('sequelize');
const db = require('../util/database');

const User = require('./userModel');

const Application = db.define('applications', {
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
  resume: {
    type: Sequelize.STRING,
  },
  marked: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  applied: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

Application.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });

module.exports = Application;