import { getProducts, createProduct } from "../controllers/product.js";
import { Router } from "express";

const productRoutes = Router();

productRoutes.get("/", getProducts);
productRoutes.post("/", createProduct);

export default productRoutes;
