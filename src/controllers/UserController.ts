import { Request, Response } from 'express'
import UsersRepository from '../repositories/UsersRepository'
import { CreateUserService } from '../services/CreateUserService'
import { DeleteUserService } from '../services/DeleteUserService'
import { LoginUserService } from '../services/LoginUserService'
import { ReadUserService } from '../services/ReadUserService'
import { UpdateUserService } from '../services/UpdateUserService'

export class UserController {
  async GetUsers(req: Request, res: Response) {
    const readUsers = new ReadUserService(UsersRepository)

    const allUsers = await readUsers.execute()

    return res.status(200).json(allUsers)
  }
  async login(req: Request, res: Response) {
    const { name, email, password } = req.body

    const loginUserService = new LoginUserService(UsersRepository)

    const userToken = await loginUserService.execute(name, email, password)

    return res.status(200).json(userToken)
  }
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body

    const createUserService = new CreateUserService(UsersRepository)

    const user = await createUserService.execute(name, email, password)

    return res.status(200).json(user)
  }
  async delete(req: Request, res: Response) {
    const { id } = req.params

    const deleteUserService = new DeleteUserService(UsersRepository)

    await deleteUserService.execute(id)

    return res.status(200).json({ message: 'deleted!' })
  }
  async update(req: Request, res: Response) {
    const { id } = req.params

    const { name, email } = req.body

    const updateService = new UpdateUserService(UsersRepository)

    const newUser = await updateService.execute(name, email, id)

    return res.status(200).json(newUser)
  }
}
