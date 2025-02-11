import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware";
import { ProductsController } from "../controllers/ProductsController";

export const productsRoutes = Router()
const productsControler = new ProductsController()



productsRoutes.get("/", productsControler.index)

productsRoutes.post("/", myMiddleware, productsControler.create) 