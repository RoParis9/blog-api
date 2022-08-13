import { IPostRepository } from '../repositories/interfaces/IPostRepository'

export class UpdatePostService {
  constructor(private postRepository: IPostRepository) {}

  async execute(id:number,title: string, content: string) {
    
    const post = this.postRepository.findOne(title)
    
    if(!post){
      throw new Error('Post not found ')
    }

    if (!title || !content) {
      throw new Error('title and content are necessary')
    }
    const updatedPost = await this.postRepository.update(id,title, content)

    return updatedPost
  }
}
