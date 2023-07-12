const userService = require('../services/userService');
const auth = require('../util/auth');

const getOne = async (req, res) => {
  try {
    const user = await userService.getOneById(req.user.id);
    delete user.dataValues.password;
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const login = async (req, res) => {
  try {
    const user = await userService.getOneByEmail(req.body.email);
    if (!user) throw new Error('error on credentials')
    const isValid = await auth.comparePasswords(user.password, req.body.password)
    if (!isValid) throw new Error('error on credentials')
    const token = auth.createToken(user)
    return res.status(200).json({ token })
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const createOne = async (req, res) => {
  try {
    const { email, firstName, lastName, password } = req.body;
    const user = await userService.createOne({
      email,
      password,
      firstName,
      lastName,
    });
    console.log("User created successfully on database");
    delete user.dataValues.password;
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const updateOne = async (req, res) => {
  try {
    const { email, firstName, lastName, password } = req.body;
    const user = await userService.updateOne({
      id: req.user.id,
      email,
      password,
      firstName,
      lastName,
    });
    delete user.dataValues.password;
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const deleteOne = async (req, res) => {
  try {
    const user = await userService.deleteOne(req.params.id);
    return res.status(200).json({ result: user });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

module.exports = {
  getOne,
  createOne,
  updateOne,
  deleteOne,
  login,
};
