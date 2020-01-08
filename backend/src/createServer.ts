require("dotenv").config();
import { ApolloServer, gql } from "apollo-server";
import db from "./db";
import Mutation from "./resolvers/Mutation";
import Query from "./resolvers/Query";
import typeDefs from "./schema";

const server = new ApolloServer({
  context: (req) => ({ ...req, db }),
  resolvers: {
    Query,
  },
  typeDefs,
});

export default server;
