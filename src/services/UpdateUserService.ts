import { IUsersRepository } from '../repositories/interfaces/IUserRepository'

export class UpdateUserService {
  constructor(private userRepository: IUsersRepository) {}

  async execute(name: string, email: string, id: string) {
    const user = await this.userRepository.find(id)

    if (!user) {
      throw new Error('User not found')
    }

    if (email !== user.email) {
      const verifyEmail = await this.userRepository.findEmail(email)

      if (verifyEmail) {
        throw new Error('E-mail already used')
      }
    }

    const newUser = await this.userRepository.update(name, email)

    return newUser
  }
}
