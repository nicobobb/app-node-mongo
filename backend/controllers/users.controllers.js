import bcrypt from 'bcryptjs'
import UserModel from '../models/users.models.js'

const createUser = async (req, res, next) => {
    try {
        const { firstname, lastname, email, roles, pass } = req.body
        const hayUsuario = await UserModel.findOne({ email })
        if (hayUsuario) {
            return res.status(409).send({ error: 'El usuario ya existe' })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(pass, salt)

        const newUser = await new UserModel({
            firstname,
            lastname,
            email,
            roles,
            pass: hashedPassword,
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
        const { email, pass } = req.body
        const user = await UserModel.findOne({ email })
        if (!user) {
            return res.status(404).send({ error: 'El usuario no existe' })
        }
        const validPass = await bcrypt.compare(pass, user.pass)
        if (!validPass) {
            return res.status(401).send({ error: 'Contraseña incorrecta' })
        }
        res.json({ message: 'Bienvenido' })
    } catch (error) {
        next(error)
    }
}

export { createUser, getAllUsers, loginUser }
