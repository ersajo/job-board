const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const db = require('../util/database');

const Opportunity = require('./opportunityModel');

const Company = db.define('companies', {
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
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    set(value) {
      this.setDataValue('password', bcrypt.hashSync(value, 10));
    },
  },
  description: {
    type: Sequelize.STRING(1000),
    allowNull: false,
  },
});

Company.hasMany(Opportunity, { foreignKey: 'companyId', onDelete: 'CASCADE' });

module.exports = Company;