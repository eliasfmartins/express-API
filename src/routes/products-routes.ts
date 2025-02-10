import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware";

export const productsRoutes = Router()



productsRoutes.get("/:id", (request, response) => {
	//    /products?page=1&limit=10
	// const {page, limit} = req.query  // pegar os query params 
	const { id } = request.params
	response.send(`Hello World Express! ${id}`)
})

// colocar a função do middleware antes da funcao da rota

productsRoutes.post("/", myMiddleware, (request, response) => {
	const { name, price } = request.body

	// response.send(`Nome do Produto é : ${name} Custa ${price}`) dessa forma a resposta
	// chega como um texto
 
	response.status(201).json({ name, price }) // dessa forma ja trasforma a res em json
}) 