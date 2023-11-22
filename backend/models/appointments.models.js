import { Schema, model, Types } from 'mongoose'

const appointmentSchema = new Schema(
    {
        title: { type: String, required: true },
        start: { type: Date, required: true },
        end: { type: Date, required: true },
        userId: { type: Types.ObjectId, ref: 'User' },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

export default model('Appointment', appointmentSchema, 'appointments')
