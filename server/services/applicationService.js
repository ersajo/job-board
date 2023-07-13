const { Op } = require('sequelize');
const ApplicationModel = require('../models/applicationModel');
const CompanyModel = require('../models/companyModel');
const OpportunityModel = require('../models/opportunityModel');
const UserModel = require('../models/userModel');

const createOne = async (application) => {
  try {
    const newApplication = await ApplicationModel.create(application);
    return newApplication;
  } catch (error) {
    console.log('Error to create application:', error);
    return null;
  }
}

const getAllByUser = async (userId) => {
  try {
    const applications = await ApplicationModel.findAll({
      where: { userId: userId },
      include: [OpportunityModel],
    });
    return applications;
  } catch (error) {
    console.log('Error to find applications:', error);
    return null;
  }
}

const getCandidatesByJob = async (opportunityId) => {
  try {
    const applications = await ApplicationModel.findAll({
      where: { opportunityId },
      include: [
        UserModel,
        { model: OpportunityModel, include: [CompanyModel] },
      ],
    });
    return applications;
  } catch (error) {
    console.log('Error to find applications:', error);
    return null;
  }
}

module.exports = {
  createOne,
  getAllByUser,
  getCandidatesByJob,
}