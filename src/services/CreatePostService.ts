import { IPostRepository } from '../repositories/interfaces/IPostRepository'
import { IUsersRepository } from '../repositories/interfaces/IUserRepository'

export class CreatePostService {
  constructor(
    private postRepository: IPostRepository,
  ) {}

  async execute(title: string, content: string, author: string) {
    if (!title || !content) {
      throw new Error('title and content are required')
    }

    const existPost = await this.postRepository.findOne(title)

    if (existPost) {
      throw new Error('this post already exist')
    }

    const newPost = await this.postRepository.create(title, content, author)

    return newPost
  }
}
