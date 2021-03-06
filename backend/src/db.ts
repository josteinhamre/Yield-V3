import { config } from "dotenv";
import { Prisma } from "prisma-binding";
import { typeDefs } from "../generated/prisma-client/prisma-schema";

config();

const db = new Prisma({
  debug: true,
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  typeDefs,
});

export default db;
