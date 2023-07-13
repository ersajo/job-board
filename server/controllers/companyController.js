const companyService = require('../services/companyService');
const auth = require('../util/auth');

const getOne = async (req, res) => {
  try {
    const company = await companyService.getOneById(req.user.id);
    delete company.dataValues.password;
    return res.status(200).json(company);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}

const login = async (req, res) => {
  try {
    const company = await companyService.getOneByEmail(req.body.email);
    if (!company) throw new Error('error on credentials')
    const isValid = await auth.comparePasswords(company.password, req.body.password)
    if (!isValid) throw new Error('error on credentials')
    const token = auth.createToken(company)
    return res.status(200).json({ token })
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}

const createOne = async (req, res) => {
  try {
    const { email, name, description, password } = req.body;
    const company = await companyService.createOne({
      email,
      password,
      name,
      description,
    });
    console.log("Company created successfully on database");
    delete company.dataValues.password;
    return res.status(201).json(company);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}

const updateOne = async (req, res) => {
  try {
    const { email, name, description, password } = req.body;
    const company = await companyService.updateOne({
      id: req.user.id,
      email,
      password,
      name,
      description,
    });
    delete company.dataValues.password;
    return res.status(200).json(company);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}

const deleteOne = async (req, res) => {
  try {
    const company = await companyService.deleteOne(req.user.id);
    return res.status(200).json({ message: 'Company deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}

module.exports = {
  getOne,
  createOne,
  updateOne,
  deleteOne,
  login,
};