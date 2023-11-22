import express from 'express'
import {
    getAllAppointments,
    createAppointment,
} from '../controllers/appointments.controllers.js'
import { validateUser } from '../middlewares/auth.js'
const router = express.Router()

router.use(validateUser())

router.get('/', getAllAppointments)
router.post('/', createAppointment)

export default router
