import UserModel from "../models/users.models.js";

const createUser = async (req, res) => {
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

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await UserModel.find();
        res.json(allUsers);
    } catch (error) {
        console.error("Error al obtener todos los usuarios:", error);
        res.status(500).json({
            error: "Hubo un error al obtener todos los usuarios",
        });
    }
};

export { createUser, getAllUsers };
