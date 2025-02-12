import express, { Request, Response, NextFunction } from 'express'

import { routes } from './routes'

import { AppError } from './utils/AppError'

const PORT = 3333

const app = express()

app.use(express.json()) //dizendo que vc vai usar o json dentro do express

app.use(routes)

// tratamento de erros caso ao contrario vai aparecer um erro nada amigavel
app.use((error: any, request: Request, response: any, _: NextFunction) => {

	if (error instanceof AppError) {
		return response.status(error.statusCode).json({ message: error.message })
	}
	response.status(500).json({ message: "Erro Na Requisição" })
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))