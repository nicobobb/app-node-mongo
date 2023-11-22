import express from 'express'
import {
    getAllAppointments,
    createAppointment,
} from '../controllers/appointments.controllers.js'
const router = express.Router()

router.get('/', getAllAppointments)
router.post('/', createAppointment)

export default router
