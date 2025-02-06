import express from 'express'
import { myMiddleware } from './middlewares/my-middleware'

const PORT = 3333

const app = express()




app.use(express.json()) //dizendo que vc vai usar o json dentro do express

app.use(myMiddleware) // usar um middleware de forma global



app.get("/products/:id", (request, response) => {
	//    /products?page=1&limit=10
	// const {page, limit} = req.query  // pegar os query params 
	const { id } = request.params
	response.send(`Hello World Express! ${id}`)
})

// colocar a função do middleware antes da funcao da rota

app.post("/products", myMiddleware,(request, response) => {
	const { name, price } = request.body

	// response.send(`Nome do Produto é : ${name} Custa ${price}`) dessa forma a resposta
	// chega como um texto

	response.status(201).json({ name, price }) // dessa forma ja trasforma a res em json
})


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))