"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createServer_1 = __importDefault(require("./createServer"));
createServer_1.default.listen().then(function (_a) {
    var url = _a.url;
    console.log("\uD83D\uDE80  Server ready at " + url);
});
//# sourceMappingURL=index.js.map