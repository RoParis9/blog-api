import { IPostRepository } from '../repositories/interfaces/IPostRepository'

export class DeletePostService {
  constructor(private postRepository: IPostRepository) {}

  async execute(id: number,title:string) {

    if (!id) {
      throw new Error('an id is necessary to delete the post')
    }
    const deletePost = await this.postRepository.findOne(title)

    if(!deletePost){
      throw new Error('this post doesn`t exist')
    }

    await this.postRepository.deleteOne(id)
  }
}
