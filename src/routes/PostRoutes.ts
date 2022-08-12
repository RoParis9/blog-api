import {Router} from 'express'
import { PostController } from '../controllers/PostController'
import { AuthMiddleware } from '../middleware/auth'

export const postRoutes = Router()

const postController = new PostController()

postRoutes.get('/', postController.readAllPosts)
postRoutes.get('/post/:id', postController.readOnePost)
postRoutes.post('/post/create',AuthMiddleware, postController.create)
postRoutes.put('/post/update/:id', AuthMiddleware, postController.updatePost)
postRoutes.delete('/post/delete/:id', AuthMiddleware, postController.delete)




