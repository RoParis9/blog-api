import express from 'express'
import cors from 'cors'
import { userRoutes } from './routes/UserRoutes'
import 'dotenv/config'

const app = express()

app.use(express.json())
app.use(cors())
app.use(userRoutes)
app.listen(process.env.PORT, () => {
  console.log('server running')
})
