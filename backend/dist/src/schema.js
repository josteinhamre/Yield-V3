"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var graphql_import_1 = require("graphql-import");
var typeDefsFile = graphql_import_1.importSchema(__dirname.concat("/schema.graphql"));
var typeDefs = apollo_server_1.gql(typeDefsFile);
exports.default = typeDefs;
//# sourceMappingURL=schema.js.map