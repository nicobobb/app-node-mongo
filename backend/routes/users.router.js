import express from 'express'
import {
    createUser,
    getAllUsers,
    loginUser,
} from '../controllers/users.controllers.js'
const router = express.Router()

router.post('/', createUser)

router.post('/login', loginUser)

router.get('/', getAllUsers)

export default router
