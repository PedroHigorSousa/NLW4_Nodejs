import { Router } from 'express'

// Imports controllers
import { UserController } from './app/controllers/UserController'

// Instance controllers
const userController = new UserController

const routes = Router()

// Create user
routes.post('/users', userController.create)

export default routes