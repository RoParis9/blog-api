import { IPostRepository } from './interfaces/IPostRepository'
import { Post } from '@prisma/client'
import { database } from '../database'

class PostRepository implements IPostRepository {
  async findAll(): Promise<Post[]> {
    const posts = await database.post.findMany()
    return posts
  }
    //fix author problem
  async create(author: string, title: string, content: string): Promise<Post> {
    const post = await database.post.create({
      data: {
        author,
        title,
        content,
      },
    })
    return post
  }
  async findOne(title: string): Promise<Post | null> {
    const post = await database.post.findFirstOrThrow({
      where: {
        title,
      },
    })
    return post
  }

  async deleteOne(id: string): Promise<void> {
    await database.post.delete({
      where: {
        id,
      },
    })
  }

  async update(title: string, content: string): Promise<Post> {
    const post = await database.post.update({
      where: {
        title,
      },
      data: {
        content,
      },
    })
    return post
  }
}
export default new PostRepository()
