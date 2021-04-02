import { Application } from "./deps.ts";
import configs from "./config/config.ts";
import router from "./routers/all.routers.ts";

const { url, port} = configs;

const app = new Application();

router.init(app);

app.use((ctx) => {
  ctx.response.body = 'Welcome to Simple Deno Product API';
});

app.addEventListener("listen", () => {
    console.log(`Simple Rest API is running on url ${url} with port ${port}`);
});

if (import.meta.main) {
  await app.listen({ port });
}

export { app };