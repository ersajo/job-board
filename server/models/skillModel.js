const Sequelize = require('sequelize');
const db = require('../util/database');

const Skill = db.define('skills', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, { timestamps: false });

module.exports = Skill;