import express from 'express'

import { routes } from './routes'

const PORT = 3333

const app = express()

app.use(express.json()) //dizendo que vc vai usar o json dentro do express

app.use(routes)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))