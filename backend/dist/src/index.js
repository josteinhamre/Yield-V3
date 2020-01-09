"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
dotenv_1.config();
var createServer_1 = __importDefault(require("./createServer"));
createServer_1.default.listen({ port: 4000 }, function () {
    return console.log("\uD83D\uDE80 Server ready at http://localhost:4000");
});
//# sourceMappingURL=index.js.map