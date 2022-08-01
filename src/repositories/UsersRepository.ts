import { User } from '@prisma/client'
import { database } from '../database'
import { IUsersRepository } from './interfaces/IUserRepository'

class UsersRepository implements IUsersRepository {
  async create(name: string, email: string, password: string): Promise<User> {
    const user = await database.user.create({
      data: {
        name,
        email,
        password,
      },
    })
    return user
  }
  async find(id: string): Promise<User | null> {
    const user = await database.user.findUnique({
      where: {
        id,
      },
    })
    return user
  }
  async findAll():Promise<User[]>{
    const user = await database.user.findMany()

    return user
  }
  async findEmail(email: string): Promise<User | null> {
    const user = await database.user.findUnique({
      where: {
        email: email,
      },
    })
    return user
  }
  async update(name: string, email: string): Promise<User> {
    const user = await database.user.update({
      where: {
        email: email,
      },
      data: {
        name: name,
        email: email,
      },
    })
    return user
  }
  async delete(id: string): Promise<void> {
    await database.user.delete({
      where: {
        id,
      },
    })
  }
}
export default new UsersRepository()
