const UserModel = require('../models/userModel');

const getAll = async (req, res) => {
  try {
    const users = await UserModel.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOne = async (req, res) => {
  try {
    const One = await UserModel.findByPk(req.params.id);
    return res.status(200).json({ result: One });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const createOne = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await UserModel.create({
      username: username,
      email: email,
      password: password,
    });
    console.log("User created successfully on database");
    return res.status(201).json({ result: user });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const updateOne = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await UserModel.update({
      username: username,
      email: email,
      password: password,
    }, { where: { id: req.params.id } });
    return res.status(200).json({ result: user });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const deleteOne = async (req, res, next) => {
  try {
    const user = await UserModel.destroy({ where: { id: req.params.id } });
    return res.status(200).json({ result: user });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

module.exports = {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
};
