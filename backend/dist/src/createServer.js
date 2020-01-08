"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
var apollo_server_1 = require("apollo-server");
var db_1 = __importDefault(require("./db"));
var Query_1 = __importDefault(require("./resolvers/Query"));
var schema_1 = __importDefault(require("./schema"));
var server = new apollo_server_1.ApolloServer({
    context: function (req) { return (__assign(__assign({}, req), { db: db_1.default })); },
    resolvers: {
        Query: Query_1.default,
    },
    typeDefs: schema_1.default,
});
exports.default = server;
//# sourceMappingURL=createServer.js.map