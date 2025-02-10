// juntar todas as Rotas Da Aplicação


import { Router } from "express";

import { productsRoutes } from "./products-routes";

export const routes = Router()

routes.use("/products", productsRoutes)