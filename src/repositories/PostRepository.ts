import { IPostRepository } from './interfaces/IPostRepository'
import { Post} from '@prisma/client'
import { database } from '../database'

class PostRepository implements IPostRepository {
  async findAll(): Promise<Post[]> {
    const posts = await database.post.findMany()
    return posts
  }
 
  async findOne(title:string): Promise<Post | null> {
    const post = await database.post.findFirstOrThrow({
      where: {
        title,
      },
    })
    return post
  }

  async deleteOne(id: number): Promise<void> {
    await database.post.delete({
      where: {
        id,
      },
    })
  }

  async update(id:number,title: string, content: string): Promise<Post> {
    const post = await database.post.update({
      where: {id},
      data: {
        title,
        content,
      },
    })
    return post
  }
  async create(userId:number,title:string,content:string):Promise<Post | void>{
    const post = await database.post.create({
      data:{
        title,
        content,
        author:{connect:{id:userId}}
      }
    })
    return post
  }
  
}
export default new PostRepository()
