const Sequelize = require('sequelize');
const db = require('../util/database');

const Application = require('./applicationModel');
const Skill = require('./skillModel');

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
});

const OpportunitySkills = db.define('opportunitySkills', {}, { timestamps: false });

Opportunity.hasMany(Application, { foreignKey: 'opportunityId', onDelete: 'CASCADE' });
Opportunity.belongsToMany(Skill, { through: OpportunitySkills });
Skill.belongsToMany(Opportunity, { through: OpportunitySkills });

module.exports = Opportunity;