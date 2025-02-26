import { Request, Response } from 'express';
import { AppError } from '../utils/AppError';
import { z } from 'zod';
export class ProductsController {
	/**
	 * idex - GET para listar vários registros.
	 * show - GET para exibir um registro específico.
	 * create - POST para criar um registro
	 * update - PUT para atualizar um registro
	 * remove - DELETE para remover um registro
	 */

	index(request: Request, response: Response) {
		//    /products?page=1&limit=10
		// const {page, limit} = request.query  // pegar os query params
		// const { id } = request.params
		response.send(`Hello World Expresss!`);
	}
	create(request: Request, response: Response) {
		const bodySchema = z.object({
			name: z
				.string({ required_error: 'nome e requerido' })
				.trim()
				.min(6),
			price: z
				.number()
				// .nullish()
				.positive(),
		});

		const { name, price } = bodySchema.parse(request.body);
		//throw new Error("Erro ao tentar criar produto")

		// throw new AppError('Erro ao tentar criar um produto!')

		// response.send(`Nome do Produto é : ${name} Custa ${price}`) dessa forma a resposta
		// chega como um texto

		response.status(201).json({ name, price });
		// dessa forma ja trasforma a res em json
	}
}
