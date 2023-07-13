const OpportunityModel = require('../models/opportunityModel');
const SkillModel = require('../models/skillModel');

const createOne = async (opportunity) => {
  try {
    const newOpportunity = await OpportunityModel.create({
      ...opportunity,
      skills: opportunity.skills.map(skill => ({ name: skill })),
    }, {
      include: [SkillModel]
    });
    return newOpportunity;
  } catch (error) {
    console.log('Error to create opportunity:', error);
    return null;
  }
}

const getAllByCompany = async (companyId) => {
  try {
    const opportunities = await OpportunityModel.findAll({
      where: { companyId: companyId },
      include: [SkillModel]
    });
    return opportunities;
  } catch (error) {
    console.log('Error to find opportunities:', error);
    return null;
  }
}

const getOneById = async (id) => {
  try {
    const opportunity = await OpportunityModel.findByPk(id, {
      include: [SkillModel]
    });
    return opportunity;
  } catch (error) {
    console.log('Error to find opportunity:', error);
    return null;
  }
}

const updateOne = async (opportunity) => {
  try {
    const updatedOpportunity = await OpportunityModel.update({
      title: opportunity.title,
      description: opportunity.description,
      location: opportunity.location,
      minSalary: opportunity.minSalary,
      maxSalary: opportunity.maxSalary,
      skills: opportunity.skills,
    }, { where: { id: opportunity.id } });
    return updatedOpportunity;
  } catch (error) {
    console.log('Error to update opportunity:', error);
    return null;
  }
}

const deleteOne = async (id) => {
  try {
    const deletedOpportunity = await OpportunityModel.destroy({ where: { id: id } });
    return deletedOpportunity;
  } catch (error) {
    console.log('Error to delete opportunity:', error);
    return null;
  }
}

const getAll = async () => {
  try {
    const opportunities = await OpportunityModel.findAll({
      include: [SkillModel]
    });
    return opportunities;
  } catch (error) {
    console.log('Error to find opportunities:', error);
    return null;
  }
}

module.exports = {
  createOne,
  getAllByCompany,
  getOneById,
  updateOne,
  deleteOne,
  getAll,
}