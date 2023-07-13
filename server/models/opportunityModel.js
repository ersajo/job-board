const Sequelize = require('sequelize');
const db = require('../util/database');

const Application = require('./applicationModel');

const Opportunity = db.define('opportunities', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  companyId: {
    type: Sequelize.UUID,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING(1000),
    allowNull: false,
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  minSalary: {
    type: Sequelize.FLOAT,
  },
  maxSalary: {
    type: Sequelize.FLOAT,
  },
  skills: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: [],
  },
});

Opportunity.hasMany(Application, { foreignKey: 'opportunityId', onDelete: 'CASCADE' });

module.exports = Opportunity;