import { IPostRepository } from '../repositories/interfaces/IPostRepository'

export class ReadPostService {
  constructor(private postService: IPostRepository) {}
  async execute(title: string) {
    
    if (!title) {
      throw new Error('post title is necessary')
    }

    const singlePost = await this.postService.findOne(title)

    return singlePost
  }
}
