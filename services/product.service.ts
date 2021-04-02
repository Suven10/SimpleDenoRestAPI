import { Product } from "../models/product.ts";

let products: Product[] = [
    {
      id: "1",
      name: "Product One",
      description: "This is product one",
      price: 99.99,
    },
    {
      id: "2",
      name: "Product Two",
      description: "This is product two",
      price: 150.99,
    },
    {
      id: "3",
      name: "Product Three",
      description: "This is product three",
      price: 199.99,
    },
    {
      id: "4",
      name: "Product Four",
      description: "This is product four",
      price: 289.99,
    },
  ];

export class ProductService {

    public static async getAllProducts(){
        return await products;
    }

    public static async getProductById(id: string){
        return await products.find(x=>x.id == id);
    }
}