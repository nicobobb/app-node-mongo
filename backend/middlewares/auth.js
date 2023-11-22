import jwt from 'jsonwebtoken'

export const validateUser = (req, res, next) => {
    return (req, res, next) => {
        try {
            console.log('Estoy en el middleware de validación de usuario')
            const token = req.cookies.jwt
            const { JsonWebTokenError, TokenExpiredError } = jwt
            const user = jwt.verify(token, process.env.TOKEN_SECRET)
            req.user = user
            console.log(user)
            next()
        } catch (error) {
            const { JsonWebTokenError, TokenExpiredError } = jwt
            if (
                error instanceof JsonWebTokenError ||
                error instanceof TokenExpiredError
            ) {
                return res.status(401).json({
                    ok: false,
                    message: error.message,
                    error: 'Unauthorized',
                })
            }
            res.status(500).json({ ok: false, message: error.message })
        }
    }
}
