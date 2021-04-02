import type { Application } from "../deps.ts";
import productRouter from "./product.router.ts";

const init = (app: Application) => {
  app.use(productRouter.routes());

  app.use(productRouter.allowedMethods());
};

export default {
  init,
};