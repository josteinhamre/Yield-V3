import { ApolloServer, gql } from "apollo-server-express";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
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
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

server.applyMiddleware({ app, path });

app.use(cookieParser());

export default app;
