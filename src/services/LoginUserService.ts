import { IUsersRepository } from '../repositories/interfaces/IUserRepository'
import 'dotenv/config'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export class LoginUserService {
  constructor(private userRepository: IUsersRepository) {}

  async execute(name:string, email:string, password:string) {
    if (!name || !email || !password) {
      throw new Error('All fields are necessary')
    }

    const user = await this.userRepository.findEmail(email)

    if (!user) {
      throw new Error('User Doesn`t exist')
    }

    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) {
      throw new Error('Email or Password Invalid!')
    }

    const token = jwt.sign({ id: user.id }, process.env.SECRET, {
      expiresIn: '1d',
    })

    return token
  }
}
