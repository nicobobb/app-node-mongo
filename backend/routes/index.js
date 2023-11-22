import usersRouter from './users.router.js'
import appointmentsRouter from './appointments.router.js'

function routerApi(app) {
    app.use('/users', usersRouter)
    app.use('/appointments', appointmentsRouter)
}

export default routerApi
