import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import User from '../models/User'

class UserController {
    async create(request: Request, response: Response) {
        const body = request.body

        const usersRespository = getRepository(User)

        return response.status(200).json(
            {
                message: 'registered user'
            }
        )
    }
}

export { UserController }