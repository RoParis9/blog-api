import {Router} from 'express'
import { PostController } from '../controllers/PostController'

export const postRoutes = Router()

const postController = new PostController()

postRoutes.get('/posts', postController.findAll)
postRoutes.get('/post/:id', postController.findOne)
postRoutes.post('/post/create',postController.create)
postRoutes.put('/post/update/:id', postController.update)
postRoutes.delete('/post/delete/:id', postController.deleteOne)




