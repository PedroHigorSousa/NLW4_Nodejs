import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

// Models
import { User } from '../models/User'

class UserController {
    async create(request: Request, response: Response) {
        const { name, email } = request.body

        const usersRespository = getRepository(User)

        const userAlreadyExists = await usersRespository.findOne(
            {
                email
            }
        )

        if (userAlreadyExists) {
            return response.status(400).json({
                error: 'User already exists'
            })
        }

        const user = usersRespository.create(
            {
                name,
                email
            }
        )

        await usersRespository.save(user)

        return response.status(200).json({ user })
    }
}

export { UserController }