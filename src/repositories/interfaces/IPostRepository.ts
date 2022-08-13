import { Post} from '@prisma/client'

export interface IPostRepository {
  findAll(): Promise<Post[]>
  findOne(id:number): Promise<Post | null>
  create(userId:number,title: string, content: string): Promise<Post | void>
  deleteOne(id: number): Promise<void>
  update(id:number,title: string, content: string): Promise<Post>
}
