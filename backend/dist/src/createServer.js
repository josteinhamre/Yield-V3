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
var apollo_server_express_1 = require("apollo-server-express");
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var db_1 = __importDefault(require("./db"));
var Mutation_1 = __importDefault(require("./resolvers/Mutation"));
var Query_1 = __importDefault(require("./resolvers/Query"));
var schema_1 = __importDefault(require("./schema"));
var server = new apollo_server_express_1.ApolloServer({
    context: function (req) { return (__assign(__assign({}, req), { db: db_1.default })); },
    engine: {
        debugPrintReports: true,
    },
    resolvers: {
        Mutation: Mutation_1.default,
        Query: Query_1.default,
    },
    typeDefs: schema_1.default,
});
var app = express_1.default();
var path = "/";
var corsOptions = {
    credentials: true,
    origin: "http://localhost:3000",
};
app.use(cors_1.default(corsOptions));
app.use(function (req, res, next) {
    var token = req.cookies.token;
    if (token) {
        var decoded = jsonwebtoken_1.default.verify(token, process.env.APP_SECRET || "secret");
        req.userId = decoded.userId;
    }
    console.log("req:", req);
    next();
});
server.applyMiddleware({ app: app, path: path });
exports.default = app;
//# sourceMappingURL=createServer.js.map