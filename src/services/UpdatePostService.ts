import { IPostRepository } from '../repositories/interfaces/IPostRepository'

export class UpdatePostService {
  constructor(private postRepository: IPostRepository) {}

  async execute(title: string, content: string) {
    if (!title || !content) {
      throw new Error('title and content are necessary')
    }
    const updatedPost = await this.postRepository.update(title, content)

    return updatedPost
  }
}
