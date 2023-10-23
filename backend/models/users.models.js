import { Schema, model } from 'mongoose'

const userSchema = new Schema(
    {
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
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

export default model('User', userSchema, 'users')
