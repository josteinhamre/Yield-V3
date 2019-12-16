require("dotenv").config();
import { ApolloServer, gql } from "apollo-server";
import db from "./db";

const typeDefs = gql`
  type User {
    id: ID
    firstName: String
    lastName: String
  }

  type Query {
    users: [User]
  }
`;

const resolvers = {
  Query: {
    async users(parent, args, ctx, info) {
      return await ctx.db.query.users({}, info);
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers, context: (req) => ({ ...req, db }) });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
