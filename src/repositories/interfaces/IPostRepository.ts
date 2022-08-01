import { Post } from '@prisma/client'

export interface IPostRepository {
  findAll(): Promise<Post[]>
  findOne(title: string): Promise<Post | null>
  create(author: string, title: string, content: string): Promise<Post>
  deleteOne(id: string): Promise<void>
  update(title: string, content?: string): Promise<Post>
}
