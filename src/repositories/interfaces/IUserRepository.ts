import { User } from '@prisma/client'

export interface IUsersRepository {
  create(name: string, email: string, password: string): Promise<User>
  find(id: number): Promise<User | null>
  findEmail(email:string):Promise<User | null>
  update(id:number, name?: string, email?: string,password?:string): Promise<User>
  delete(id: number): Promise<void>
}
