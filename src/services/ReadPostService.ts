import { IPostRepository } from '../repositories/interfaces/IPostRepository'

export class ReadPostService {
  constructor(private postService: IPostRepository) {}
  async execute(id: string) {
    if (!id) {
      throw new Error('i need on post id')
    }

    const singlePost = await this.postService.findOne(id)

    return singlePost
  }
}
