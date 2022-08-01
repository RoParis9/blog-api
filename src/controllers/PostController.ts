import { ReadPostService } from '../services/ReadPostService'
import PostRepository from '../repositories/PostRepository'
import { ReadAllPostsService } from '../services/ReadAllPostsService'

export class PostController {
  async create(req: Request, res: Response) {}
  async deleteOne(req: Request, res: Response) {}
  async update(req: Request, res: Response) {}
  async findOne(req: Request, res: Response) {
    const { id } = req.body

    const findOneService = new ReadPostService(PostRepository)

    findOneService.execute(id)

    return findOneService
  }
  async findAll(req: Request, res: Response) {
    const findAll = new ReadAllPostsService(PostRepository)

    return findAll.execute()

  }
}
