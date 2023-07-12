const jwt = require('jsonwebtoken');
const userService = require('../services/userService');
const companyService = require('../services/companyService');

const verifyUserToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    const decoded = jwt.verify(token, process.env.SECRET);
    const user = await userService.getOneById(decoded.id);
    if (!user) throw new Error('User not found');
    req.user = decoded;
    next();
  } catch (error) {
    console.log('Error to verify token:', error);
    const message = error.message ? error.message : 'Auth failed';
    return res.status(401).json({ message });
  }
}

const verifyCompanyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    const decoded = jwt.verify(token, process.env.SECRET);
    const user = await companyService.getOneById(decoded.id);
    if (!user) throw new Error('User not found');
    req.user = decoded;
    next();
  } catch (error) {
    console.log('Error to verify token:', error);
    const message = error.message ? error.message : 'Auth failed';
    return res.status(401).json({ message });
  }
}

module.exports = {
  verifyUserToken,
  verifyCompanyToken,
}