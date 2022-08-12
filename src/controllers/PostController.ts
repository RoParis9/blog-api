import { Request,Response } from "express";
import PostRepository from "../repositories/PostRepository";
import { CreatePostService } from "../services/CreatePostService";
import { DeletePostService } from "../services/DeletePostService";
import { ReadAllPostsService } from "../services/ReadAllPostsService";
import { ReadPostService } from "../services/ReadPostService";
import { UpdatePostService } from "../services/UpdatePostService";
export class PostController{
  async delete(req:Request,res:Response){
    const {id} = req.body

    const deletePost = new DeletePostService(PostRepository)

    await deletePost.execute(id)

    return res.status(200).json({message:"deleted!"})

  }
  async readOnePost(req:Request,res:Response){
    const {title} = req.body

    const readPost = new ReadPostService(PostRepository)
    
    const selectedPost = await readPost.execute(title)

    return res.status(200).json(selectedPost)
  }
  async readAllPosts(req:Request,res:Response){
    const readAllPost = new ReadAllPostsService(PostRepository)
    
    await readAllPost.execute()

    return res.status(200).json(readAllPost)
  }
  async updatePost(req:Request,res:Response){
    const {title,content} = req.body
    const {id} = req.params

    const updatePost = new UpdatePostService(PostRepository)

    const updatedPost = await updatePost.execute(id,title,content)
    
    return res.status(200).json(updatedPost)

  }
  async create(req:Request,res:Response){
    try{    
    const {title,content} = req.body
    const author = req.userId

    const createPost = new CreatePostService(PostRepository)

    const postCreated = await createPost.execute(title,content,author)

    return res.status(200).json(postCreated) 
    }catch(err){
      return res.status(500).json(err)
    }
  }
  
}