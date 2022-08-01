import { IPostRepository } from '../repositories/interfaces/IPostRepository'

export class ReadAllPostsService {
  constructor(private postService: IPostRepository) {}

  async execute() {
    return await this.postService.findAll()
  }
}

