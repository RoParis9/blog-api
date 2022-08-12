import Router from 'express'
import { UserController } from '../controllers/UserController'
import { AuthMiddleware } from '../middleware/auth'

export const userRoutes = Router()

const userController = new UserController()

userRoutes.post('/register', userController.create)
userRoutes.post('/login', userController.login)
userRoutes.delete('/user/delete/:id', AuthMiddleware, userController.delete)
userRoutes.put('/user/update/:id', AuthMiddleware, userController.update)

