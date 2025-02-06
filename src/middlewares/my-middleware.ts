import { NextFunction, Request, Response } from 'express';
export function myMiddleware(
	request: Request,
	response: Response,
	next: NextFunction
) {
	console.log("Passou pelo Middleware!")

	request.user_id= '12345' //disponibilizando o userId no middleware pra poder utilizar na rota

	return next()
}

