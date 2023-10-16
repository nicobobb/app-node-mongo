import UserModel from '../models/users.models.js';

const createUser = async (req, res, next) => {
  try {
    const { firstname, lastname, email, roles, pass } = req.body;
    const newUser = await new UserModel({
      firstname,
      lastname,
      email,
      roles,
      pass,
    }).save();

    console.log('Usuario guardado exitosamente:', newUser);
    res.json({ message: newUser });
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await UserModel.find();
    res.json(allUsers);
  } catch (error) {
    next(error);
  }
};

export { createUser, getAllUsers };
