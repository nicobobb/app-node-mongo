import mongoose from "mongoose";

async function connectDB() {
    if (!process.env.MONGODB_URL) {
        throw new Error("Falta la variable de entorno MONGODB_URL");
    }
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Conexión exitosa con Mongo");
        const newUser = {
            firstname: "John",
            lastname: "Doe",
            email: "johndoe@gmail.com", // Debe ser único
            roles: {
                admin: true,
                doctor: false,
            },
        };
        console.log(newUser);
    } catch (error) {
        console.log("Hubo un error al conectarnos a la Base de Datos", error);
    }
}

export default connectDB;
