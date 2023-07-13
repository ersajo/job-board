const { Op } = require('sequelize');
const CompanyModel = require('../models/companyModel');
const OpportunityModel = require('../models/opportunityModel');

const createOne = async (opportunity) => {
  try {
    const newOpportunity = await OpportunityModel.create(opportunity);
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
    });
    return opportunities;
  } catch (error) {
    console.log('Error to find opportunities:', error);
    return null;
  }
}

const getOneById = async (id) => {
  try {
    const opportunity = await OpportunityModel.findByPk(id);
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

const getAll = async (query) => {
  try {
    console.log('query:', query);
    const finalQuery = {};
    if (query.location) finalQuery.location = { [Op.substring]: query.location };
    if (query.companyName) finalQuery['$company.name$'] = { [Op.substring]: query.companyName };
    if (query.skills) finalQuery.skills = { [Op.contains]: query.skills.split(',') };
    console.log('finalQuery:', finalQuery);
    const opportunities = await OpportunityModel.findAll({
      where: finalQuery,
      include: [
        { model: CompanyModel },
      ],
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