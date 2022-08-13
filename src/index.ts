import express from 'express'
import cors from 'cors'
import { userRoutes } from './routes/UserRoutes'
import {postRoutes} from './routes/PostRoutes'
import 'dotenv/config'

const app = express()


app.use(express.json())
app.use(cors())
app.use(userRoutes)
app.use(postRoutes)
app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT} `)
})
  