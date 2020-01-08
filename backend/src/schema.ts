import { gql } from "apollo-server";
import { importSchema } from "graphql-import";

const typeDefsFile = importSchema(__dirname.concat("/schema.graphql"));
const typeDefs = gql(typeDefsFile);

export default typeDefs;
