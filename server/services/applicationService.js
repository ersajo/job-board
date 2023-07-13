const ApplicationModel = require('../models/applicationModel');

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
}