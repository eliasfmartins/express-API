import express from 'express'
import { myMiddleware } from './middlewares/my-middleware'

const PORT = 3333

const app = express()




app.use(express.json()) //dizendo que vc vai usar o json dentro do express

app.use(myMiddleware) // usar um middleware de forma global






app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))