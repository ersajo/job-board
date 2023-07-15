const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const comparePasswords = (userPassword, reqPassword) => {
  return bcrypt.compareSync(reqPassword, userPassword);
}

const createToken = (user) => {
  try {
    const data = {
      id: user.id,
      username: user.username,
      email: user.email,
    }
    const token = jwt.sign(data, process.env.SECRET, {
      expiresIn: '1h',
    });
    return token;
  } catch (error) {
    console.log('Error to create token:', error);
    return null;
  }
}

module.exports = {
  comparePasswords,
  createToken,
};
