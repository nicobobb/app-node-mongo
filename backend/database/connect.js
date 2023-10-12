import mongoose from "mongoose";
import "dotenv/config.js";

// Define un esquema de usuario
const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: { type: String, unique: true },
    roles: {
        admin: Boolean,
        doctor: Boolean,
    },
});

// Crea un modelo de usuario a partir del esquema
const User = mongoose.model("User", userSchema);

async function connectDB() {
    if (!process.env.MONGODB_URL) {
        throw new Error("Falta la variable de entorno MONGODB_URL");
    }
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Conexión exitosa con MongoDB");

        const newUser = new User({
            firstname: "Pepe",
            lastname: "Pechudo",
            email: "elpepe.pechudo@gmail.com",
            roles: {
                admin: true,
                doctor: false,
            },
        });

        // Guarda el nuevo usuario en la base de datos
        await newUser.save();

        console.log("Usuario guardado exitosamente:", newUser);
    } catch (error) {
        console.log("Hubo un error al conectarnos a la Base de Datos", error);
    }
}

export default connectDB;
