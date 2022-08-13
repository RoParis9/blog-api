import { IPostRepository } from '../repositories/interfaces/IPostRepository'

export class ReadPostService {
  constructor(private postService: IPostRepository) {}
  async execute(id:number) {
    
    if (!id) {
      throw new Error('post id is necessary')
    }

    const singlePost = await this.postService.findOne(id)

    return singlePost
  }
}
