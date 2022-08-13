import { Request,Response } from "express";
import PostRepository from "../repositories/PostRepository";
import { CreatePostService } from "../services/CreatePostService";
import { DeletePostService } from "../services/DeletePostService";
import { ReadAllPostsService } from "../services/ReadAllPostsService";
import { ReadPostService } from "../services/ReadPostService";
import { UpdatePostService } from "../services/UpdatePostService";

export class PostController{
  async delete(req:Request,res:Response){
    const id = req.params.id

    const deletePost = new DeletePostService(PostRepository)

    await deletePost.execute(id)
    
    return res.status(200).json({message:"deleted!"})

  }
  async readOnePost(req:Request,res:Response){
    const id = req.params.id

    const findOnePost = new ReadPostService(PostRepository)

    const OnePost = await findOnePost.execute(id)
    
    return res.status(200).json(OnePost)
  }
  async readAllPosts(req:Request,res:Response){
    const getAllPosts = new ReadAllPostsService(PostRepository)
  
    const allPosts = await getAllPosts.execute()

    return res.status(200).json(allPosts)

  }
  async updatePost(req:Request,res:Response){
    const {title,content} = req.body
    const id = req.params.id

    const updatePost = new UpdatePostService(PostRepository)

    const updatedPost = await updatePost.execute(id,title,content)
    
    return res.status(200).json(updatedPost)

  }
  async create(req:Request,res:Response){
    try{    
    const {title,content} = req.body
    const userId = req.userId

    const createPost = new CreatePostService(PostRepository)

    const postCreated = await createPost.execute(userId,title,content)

    return res.status(200).json(postCreated) 
    
    }catch(err){
      return res.status(500).json(err)
    }
  }
  
}