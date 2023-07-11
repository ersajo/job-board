const Sequlize = require('sequelize');
const db = require('../util/database');

const User = db.define('users', {
  id: {
    type: Sequlize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: Sequlize.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: Sequlize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequlize.STRING,
    allowNull: false,
  },
});

module.exports = User;