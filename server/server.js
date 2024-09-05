import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import { createHandler } from "graphql-http/lib/use/express";
import playground from "graphql-playground-middleware-express";
import { dbConnection } from "./db/dbConnection.js";
import { authMiddleware } from "./middleware/protectedRoutes.js";
import { chatSchema, messageSchema, userSchema } from "./graphql/schema.js";
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cookieParser());
const expressPlayground = playground.default;
app.use("/graphql/user", (req, res) => {
  createHandler({
    schema: userSchema,
    context: { req, res },
  })(req, res);
});
app.use("/graphql/messages", authMiddleware, (req, res) => {
  createHandler({
    schema: messageSchema,
    context: { req, res },
  })(req, res);
});
app.use("/graphql/chats", authMiddleware, (req, res) => {
  createHandler({
    schema: chatSchema,
    context: { req, res },
  })(req, res);
});
app.get("/gui", expressPlayground({ endpoint: "/graphql" }));
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
