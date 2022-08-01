import { IUsersRepository } from '../repositories/interfaces/IUserRepository'

export class DeleteUserService {
  constructor(private userRepository: IUsersRepository) {}

  async execute(id: string): Promise<void> {
    if (!id) {
      throw new Error('id is necessary to delete This User')
    }

    const user = await this.userRepository.find(id)

    if (!user) {
      throw new Error('User not Found')
    }

    await this.userRepository.delete(id)
  }
}
