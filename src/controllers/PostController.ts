import PostRepository from "../repositories/PostRepository";
import { DeletePostService } from "../services/DeletePostService";
import { ReadAllPostsService } from "../services/ReadAllPostsService";
import { ReadPostService } from "../services/ReadPostService";
import { UpdatePostService } from "../services/UpdatePostService";


export class PostController {
  async create(req: Request, res: Response) {
   
  }
  async deleteOne(req: Request, res: Response) {
    const {id} = req.body;

    const deletePost = new DeletePostService(PostRepository)

    await deletePost.execute(id)
    
    return res.status(200).json({message: "deleted!"})
  }
  async update(req: Request, res: Response) {
    const {title,content} = req.body;

    const updateService = new UpdatePostService(PostRepository)

    const updatedPost = await updateService.execute(title,content)

    return res.status(200).json(updatedPost)
    
  }
  async findOne(req: Request, res: Response) {
    const {title} = req.body;

    const findOnePostService = new ReadPostService(PostRepository)

    const singlePost = await findOnePostService.execute(title)

    return res.status(200).json(singlePost)
    
  }
  async findAll(req: Request, res: Response) {

    const findPostService = new ReadAllPostsService(PostRepository)

    const allPosts = await findPostService.execute()

    return res.status(200).json(allPosts)

  }
}
