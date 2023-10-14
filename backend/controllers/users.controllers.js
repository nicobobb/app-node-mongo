import UserModel from "../models/users.models.js";

const login = async (req, res) => {
    const newUser = await new UserModel({
        firstname: "Pepe",
        lastname: "Pechudo",
        email: "elpepe56.pechudo@gmail.com",
        roles: {
            admin: true,
            doctor: false,
        },
    });

    // Guarda el nuevo usuario en la base de datos
    await newUser.save();

    console.log("Usuario guardado exitosamente:", newUser);
    res.json({ message: newUser });
};

export { login };
