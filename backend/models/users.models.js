import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    pass: { type: String, required: true },
    roles: {
        type: {
            admin: Boolean,
            doctor: Boolean,
        },
        required: true,
    },
    date: { type: Date, default: Date.now },
})

export default model('User', userSchema, 'users')
