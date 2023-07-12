const CompanyModel = require('../models/companyModel');

const getOneById = async (id) => {
  try {
    const company = await CompanyModel.findByPk(id);
    return company;
  } catch (error) {
    console.log('Error to find company:', error);
    return null;
  }
}

const getOneByEmail = async (email) => {
  try {
    const company = await CompanyModel.findOne({ where: { email: email } });
    return company;
  } catch (error) {
    console.log('Error to find company:', error);
    return null;
  }
}

const createOne = async (data) => {
  try {
    const company = await CompanyModel.create(data);
    console.log("Company created successfully on database");
    return company;
  } catch (error) {
    console.log('Error to create company:', error);
    return null;
  }
}

const updateOne = async (data) => {
  try {
    const company = await CompanyModel.update({
      email: data.email,
      password: data.password,
      name: data.name,
      description: data.description,
    }, { where: { id: data.id } });
    console.log("Company updated successfully on database");
    return company;
  } catch (error) {
    console.log('Error to update company:', error);
    return null;
  }
}

const deleteOne = async (id) => {
  try {
    const company = await CompanyModel.destroy({ where: { id: id } });
    console.log("Company deleted successfully on database");
    return company;
  } catch (error) {
    console.log('Error to delete company:', error);
    return null;
  }
}

module.exports = {
  getOneById,
  getOneByEmail,
  createOne,
  updateOne,
  deleteOne,
}