const Sequelize = require('sequelize');
const db = require('../util/database');

const Opportunity = require('./opportunityModel');

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
});

Skill.belongsToMany(Opportunity, { through: 'opportunitySkills', foreignKey: 'skillId' });

module.exports = Skill;