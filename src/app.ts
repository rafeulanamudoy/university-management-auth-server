import express, { Application, Request, Response } from 'express'
const app: Application = express()
import cors from 'cors'
import usersRouter from './app/modules/users/users.route'

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users/', usersRouter)
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
