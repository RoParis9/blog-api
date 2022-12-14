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

  async find(id: number): Promise<User | null> {
    const user = await database.user.findUniqueOrThrow({
      where:{
        id
      }
      
    })
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
  async update(id:number,name: string, email: string, password:string): Promise<User> {
    const user = await database.user.update({
      where: {
        id:id,
      },
      data: {
        name: name,
        email: email,
        password: password,
      },
    })
    return user
  }
  async delete(id: number): Promise<void> {
    await database.user.delete({
      where: {
        id,
      },
    })
  }
}
export default new UsersRepository()
