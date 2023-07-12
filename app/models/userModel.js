const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const db = require('../util/database');

const Application = require('./applicationModel');

const User = db.define('users', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    set(value) {
      this.setDataValue('password', bcrypt.hashSync(value, 10));
    }
  },
});

User.hasMany(Application, { foreignKey: 'userId', onDelete: 'CASCADE' });

module.exports = User;