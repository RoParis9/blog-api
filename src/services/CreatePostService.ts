import { IPostRepository } from '../repositories/interfaces/IPostRepository'

export class CreatePostService {
  constructor(
    private postRepository: IPostRepository,
  ) {}

  async execute(userId:number,title: string, content: string) {
    if (!title || !content) {
      throw new Error('title and content are required')
    }

    const newPost = await this.postRepository.create(userId,title,content)

    return newPost
  }
}
