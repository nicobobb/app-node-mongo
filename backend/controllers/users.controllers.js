import UserModel from "../models/users.models.js";

const login = async (req, res) => {
    const { firstname, lastname, email, roles, pass } = req.body;
    const newUser = await new UserModel({
        firstname,
        lastname,
        email,
        roles,
        pass,
    }).save();

    console.log("Usuario guardado exitosamente:", newUser);
    res.json({ message: newUser });
};

export { login };
