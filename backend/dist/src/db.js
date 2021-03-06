"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
var prisma_binding_1 = require("prisma-binding");
var prisma_schema_1 = require("../generated/prisma-client/prisma-schema");
dotenv_1.config();
var db = new prisma_binding_1.Prisma({
    debug: true,
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    typeDefs: prisma_schema_1.typeDefs,
});
exports.default = db;
//# sourceMappingURL=db.js.map