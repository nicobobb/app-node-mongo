import AppointmentModel from '../models/appointments.models.js'

const getAllAppointments = async (req, res, next) => {
    try {
        const allAppointments = await AppointmentModel.find()
        res.json(allAppointments)
    } catch (error) {
        next(error)
    }
}

const createAppointment = async (req, res, next) => {
    try {
        const { title, start, end, userId } = req.body
        const newAppointment = await new AppointmentModel({
            title,
            start,
            end,
            userId,
        }).save()
        console.log('Cita guardada exitosamente:', newAppointment)
        res.json({ message: newAppointment })
    } catch (error) {
        next(error)
    }
}

export { getAllAppointments, createAppointment }
