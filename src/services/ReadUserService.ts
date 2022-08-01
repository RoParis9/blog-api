import { IUsersRepository } from '../repositories/interfaces/IUserRepository'
import { User } from '@prisma/client'

export class ReadUserService {
  constructor(private userRepository: IUsersRepository) {}

  async execute(): Promise<User[]> {
    const users = await this.userRepository.findAll()
    return users
  }
}
