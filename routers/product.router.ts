import ProductController  from '../controllers/product.controller.ts';
import { Router } from "../deps.ts";

const router: Router = new Router();


router.get(
  "/api/products",
  ProductController.getAllProducts
);

router.get(
  "/api/products/:id",
  ProductController.getProductById
);

export default router;