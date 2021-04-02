import { RouterContext } from "../deps.ts";
import { ProductService } from './../services/product.service.ts';

class ProductController {

    /**
     * Get all products function
     * @param response
     * @returns Promise<void>
     */
    public static async getAllProducts({ response }: RouterContext): Promise<void> {
        response.body = await ProductService.getAllProducts();
    }
  
    /**
     * Get single product function
     * @param params
     * @param response
     * @returns Promise<void>
     */
    public static async getProductById({ params, response }: RouterContext): Promise<void> {
      const { id } = params;
      response.body = await ProductService.getProductById(id as string);
    }
}

export default ProductController;