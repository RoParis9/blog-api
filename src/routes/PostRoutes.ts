import {Router} from 'express'
import { PostController } from '../controllers/PostController'

export const postRoutes = Router()

const postController = new PostController()

postRoutes.get('/',postController.findAll)



