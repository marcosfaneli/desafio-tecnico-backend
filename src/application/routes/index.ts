import { Router } from 'express'
import { routes as cardRoutes } from './card-routes'
import { routes as loginRoutes } from './auth-routes'
import { validateToken } from '../middleware/auth-validate'

const routes = Router()


routes.use('/cards', validateToken, cardRoutes)
routes.use('/login', loginRoutes)

export { routes }
