import { Request, Response } from 'express'
import UsersRepository from '../repositories/UsersRepository'
import { CreateUserService } from '../services/CreateUserService'
import { DeleteUserService } from '../services/DeleteUserService'
import { LoginUserService } from '../services/LoginUserService'
import { UpdateUserService } from '../services/UpdateUserService'

export class UserController {
  async login(req: Request, res: Response) {
    try{
    const { name, email, password } = req.body

    const loginUserService = new LoginUserService(UsersRepository)

    const userToken = await loginUserService.execute(name, email, password)

    return res.status(200).json(userToken)
    }catch(err){
      return res.status(500).json({message: 'can`t login, try again'})
    }
  }
  async create(req: Request, res: Response) {
    try{
    const { name, email, password } = req.body

    const createUserService = new CreateUserService(UsersRepository)

    const user = await createUserService.execute(name, email, password)

    return res.status(200).json(user)
    }catch(err){
      return res.status(500).json({message:'can`t create this user'})
    }
  }
  async delete(req: Request, res: Response) {
    try{
    const { id } = req.params
    const userId = req.userId

    const deleteUserService = new DeleteUserService(UsersRepository)

    await deleteUserService.execute(id,userId)

    return res.status(200).json({ message: 'deleted!' })

    }catch{
      return res.status(401).json({message: 'you are not allowed to delete this user or user doesn`t exist'})
    }
  }
  async update(req: Request, res: Response) {
    try{     
    const { id } = req.params

    const { name, email,password } = req.body

    const updateService = new UpdateUserService(UsersRepository)

    const newUser = await updateService.execute(name, email, id, password)

    return res.status(200).json(newUser)
    }catch(err){
      return res.status(401).json({message: err})
    }
  }
}
