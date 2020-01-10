import { ApolloServer, gql } from "apollo-server-express";
import cookieParser from "cookie-parser";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import db from "./db";
import Mutation from "./resolvers/Mutation";
import Query from "./resolvers/Query";
import typeDefs from "./schema";

const server = new ApolloServer({
  context: (req) => ({ ...req, db }),
  engine: {
    debugPrintReports: true,
  },
  resolvers: {
    Mutation,
    Query,
  },
  typeDefs,
});

const app = express();
const path = "/";
const corsOptions = {
  credentials: true,
  origin: true,
};

interface IDecoded {
  userId: string;
}

declare module "express-serve-static-core" {
  interface Request {
    userId: string;
    user: object;
  }
}

app.use(cookieParser());
// Decodes Cookie and ads the UserId to the request.
app.use((req: Request, res, next) => {
  console.log("req:", req.cookies.token);
  const { token } = req.cookies;
  if (token) {
    const decoded = jwt.verify(token, process.env.APP_SECRET || "secret") as IDecoded;
    req.userId = decoded.userId;
  }
  console.log("req:", req.userId);
  next();
});

app.use(async (req: Request, res, next) => {
  if (!req.userId) { return next(); }
  const user = await db.query.user({ where: { id: req.userId } }, "{id, email, firstName, lastName}");
  req.user = user;
});

server.applyMiddleware({
  app, cors: {
    credentials: true,
    origin: true,
  }, path,
});

export default app;
