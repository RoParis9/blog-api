import { User } from '@prisma/client'

export interface IUsersRepository {
  create(name: string, email: string, password: string): Promise<User>
  find(id: string): Promise<User | null>
  findAll():Promise<User[]>
  findEmail(email:string):Promise<User | null>
  update(name?: string, email?: string): Promise<User>
  delete(id: string): Promise<void>
}
