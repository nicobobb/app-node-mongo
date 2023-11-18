import bcrypt from 'bcryptjs'
import UserModel from '../models/users.models.js'

const createUser = async (req, res, next) => {
    try {
        const { nombre, email, password } = req.body
        const hayUsuario = await UserModel.findOne({ email })
        if (hayUsuario) {
            return res.status(409).send({ error: 'El usuario ya existe' })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = await new UserModel({
            nombre,
            email,
            password: hashedPassword,
        }).save()

        console.log('Usuario guardado exitosamente:', newUser)
        res.json({ message: newUser })
    } catch (error) {
        next(error)
    }
}

const getAllUsers = async (req, res, next) => {
    try {
        const allUsers = await UserModel.find()
        res.json(allUsers)
    } catch (error) {
        next(error)
    }
}

const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const user = await UserModel.findOne({ email })
        if (!user) {
            return res.status(404).send({ error: 'El usuario no existe' })
        }
        const validPass = await bcrypt.compare(password, user.password)
        if (!validPass) {
            return res.status(401).send({ error: 'Contraseña incorrecta' })
        }
        res.json({ message: 'Bienvenido' })
    } catch (error) {
        next(error)
    }
}

export { createUser, getAllUsers, loginUser }
