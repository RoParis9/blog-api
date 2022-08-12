import { User } from '@prisma/client'

export interface IUsersRepository {
  create(name: string, email: string, password: string): Promise<User>
  find(id: string): Promise<User | null>
  findEmail(email:string):Promise<User | null>
  update(id:string, name?: string, email?: string,password?:string): Promise<User>
  delete(id: string): Promise<void>
}
