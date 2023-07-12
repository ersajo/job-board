const UserModel = require('../models/userModel');

const getOneById = async (id) => {
  try {
    const user = await UserModel.findByPk(id);
    return user;
  } catch (error) {
    console.log('Error to find user:', error);
    return null;
  }
}

const getOneByEmail = async (email) => {
  try {
    const user = await UserModel.findOne({ where: { email: email } });
    return user;
  } catch (error) {
    console.log('Error to find user:', error);
    return null;
  }
}

const getAll = async () => {
  try {
    const users = await UserModel.findAll();
    return users;
  } catch (error) {
    console.log('Error to find users:', error);
    return null;
  }
}

const createOne = async (data) => {
  try {
    const user = await UserModel.create(data);
    console.log("User created successfully on database");
    return user;
  } catch (error) {
    console.log('Error to create user:', error);
    return null;
  }
}

const updateOne = async (data) => {
  try {
    const user = await UserModel.update({
      username: data.username,
      email: data.email,
      password: data.password,
    }, { where: { id: data.id } });
    console.log("User updated successfully on database");
    return user;
  } catch (error) {
    console.log('Error to update user:', error);
    return null;
  }
}

const deleteOne = async (id) => {
  try {
    const user = await UserModel.destroy({ where: { id: id } });
    console.log("User deleted successfully on database");
    return user;
  } catch (error) {
    console.log('Error to delete user:', error);
    return null;
  }
}

module.exports = {
  getOneById,
  getOneByEmail,
  getAll,
  createOne,
  updateOne,
  deleteOne,
}