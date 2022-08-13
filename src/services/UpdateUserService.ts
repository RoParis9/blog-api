import { IUsersRepository } from '../repositories/interfaces/IUserRepository'
import bcrypt from 'bcrypt'
export class UpdateUserService {
  constructor(private userRepository: IUsersRepository) { }

  async execute(id:number,name: string, email: string, password: string) {
    const user = await this.userRepository.find(id)

    if (!user) {
      throw new Error('User not found')
    }

    const emailInUse = await this.userRepository.findEmail(email)

    if (emailInUse) {
      throw new Error("this email is already in use")
    }
    
    const hashPassword = await bcrypt.hash(password, 10)

    const newUser = await this.userRepository.update(id, name, email, hashPassword)
    

    return {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    }
  }
}
