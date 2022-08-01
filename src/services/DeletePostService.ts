import { IPostRepository } from '../repositories/interfaces/IPostRepository'

export class DeletePostService {
  constructor(private postRepository: IPostRepository) {}

  async execute(id: string) {
    if (!id) {
      throw new Error('an id is necessary to delete the post')
    }

    await this.postRepository.deleteOne(id)
  }
}
