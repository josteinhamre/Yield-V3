"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var csv_parser_1 = __importDefault(require("csv-parser"));
var dotenv_1 = __importDefault(require("dotenv"));
var fs_1 = __importDefault(require("fs"));
var db_1 = __importDefault(require("../src/db"));
dotenv_1.default.config();
function seed() {
    return __awaiter(this, void 0, void 0, function () {
        var icons, user, account, _i, icons_1, icon;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    icons = [{ name: "Groceries", photo: "https://res.cloudinary.com/lightglance/image/upload/v1570704019/yield-resources/icons/groceries_u6b5hp.png" },
                        { name: "Food & Drinks", photo: "https://res.cloudinary.com/lightglance/image/upload/v1570704019/yield-resources/icons/food_yrgvtw.png" },
                        { name: "Travel", photo: "https://res.cloudinary.com/lightglance/image/upload/v1570704019/yield-resources/icons/travel_vzwdxf.png" },
                        { name: "Rent & Loans", photo: "https://res.cloudinary.com/lightglance/image/upload/v1570704019/yield-resources/icons/loan_ty1uqj.png" },
                        { name: "Sports & Activities", photo: "https://res.cloudinary.com/lightglance/image/upload/v1570704019/yield-resources/icons/sports_l2z7kv.png" },
                        { name: "Transport", photo: "https://res.cloudinary.com/lightglance/image/upload/v1570704019/yield-resources/icons/transport_xdgszi.png" },
                        { name: "Savings", photo: "https://res.cloudinary.com/lightglance/image/upload/v1570704019/yield-resources/icons/saving_kz7jxw.png" },
                        { name: "Clothing", photo: "https://res.cloudinary.com/lightglance/image/upload/v1570704019/yield-resources/icons/shirt_xpc9x6.png" },
                        { name: "Bills & Fees", photo: "https://res.cloudinary.com/lightglance/image/upload/v1570704019/yield-resources/icons/bills_chkytz.png" },
                        { name: "Gifts", photo: "https://res.cloudinary.com/lightglance/image/upload/v1570704019/yield-resources/icons/gifts_tk6zlw.png" },
                        { name: "Entertainment", photo: "https://res.cloudinary.com/lightglance/image/upload/v1570704019/yield-resources/icons/entertainment_hqjy7b.png" },
                        { name: "Hygiene & Beauty", photo: "https://res.cloudinary.com/lightglance/image/upload/v1570704019/yield-resources/icons/beauty_gxftvd.png" },
                        { name: "Home & Interior", photo: "https://res.cloudinary.com/lightglance/image/upload/v1570704019/yield-resources/icons/home_gzvxtt.png" },
                        { name: "Gadgets", photo: "https://res.cloudinary.com/lightglance/image/upload/v1570704019/yield-resources/icons/gadgets_c2c9yg.png" },
                        { name: "Income", photo: "https://res.cloudinary.com/lightglance/image/upload/v1570704019/yield-resources/icons/income_iuru1x.png" },
                        { name: "No Category", photo: "https://res.cloudinary.com/lightglance/image/upload/v1570704019/yield-resources/icons/no-cat-qmb_npqck7.png" }];
                    return [4 /*yield*/, db_1.default.mutation.createUser({
                            data: {
                                email: "josteinhamre@gmail.com" + Date.now().toString().slice(10, 13),
                                firstName: "Jostein",
                                lastName: "Hamre",
                                password: "qwerty",
                            },
                        })];
                case 1:
                    user = _a.sent();
                    return [4 /*yield*/, db_1.default.mutation.createAccount({
                            data: {
                                balance: 0,
                                bank: {
                                    create: {
                                        name: "Sbanken",
                                    },
                                },
                                bankAccountId: "D3852F20B2C77A7D381F7ECA541619B4",
                                name: "brukskonto",
                                number: "97135581139",
                                owner: {
                                    connect: {
                                        id: user.id,
                                    },
                                },
                            },
                        })];
                case 2:
                    account = _a.sent();
                    _i = 0, icons_1 = icons;
                    _a.label = 3;
                case 3:
                    if (!(_i < icons_1.length)) return [3 /*break*/, 6];
                    icon = icons_1[_i];
                    return [4 /*yield*/, db_1.default.mutation.createCategory({
                            data: {
                                budgets: {
                                    create: {
                                        amount: Math.floor(Math.random() * 100000),
                                        endDate: "2019-12-31T23:59:59.999Z",
                                        startDate: "2019-12-01T00:00:00.000Z",
                                    },
                                },
                                color: Math.floor(Math.random() * 16777215).toString(16),
                                icon: {
                                    create: icon,
                                },
                                name: icon.name,
                                user: {
                                    connect: {
                                        id: user.id,
                                    },
                                },
                            },
                        })];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    _i++;
                    return [3 /*break*/, 3];
                case 6:
                    // Parses the seed_helper CSV file, containing 248 transactions.
                    fs_1.default.createReadStream(__dirname + "/seed_helper.csv")
                        .pipe(csv_parser_1.default({ separator: ";" }))
                        .on("data", function (row) { return __awaiter(_this, void 0, void 0, function () {
                        var date, info, out, inn, amount, categoryName, category;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    date = new Date(row.Dato.split(".").reverse().join("-") + " 12:00 GMT+1");
                                    info = row.Forklaring;
                                    out = parseFloat(row.Uttak.replace(",", ".")) * 100;
                                    inn = parseFloat(row.Innskudd.replace(",", ".")) * 100;
                                    amount = out ? -out : inn;
                                    categoryName = row.Category;
                                    return [4 /*yield*/, db_1.default.query.categories({
                                            where: {
                                                name: categoryName,
                                                AND: {
                                                    user: {
                                                        id: user.id,
                                                    },
                                                },
                                            },
                                        })];
                                case 1:
                                    category = _a.sent();
                                    // Creates a transaction x 248
                                    db_1.default.mutation.createTransaction({
                                        data: {
                                            account: {
                                                connect: {
                                                    id: account.id,
                                                },
                                            },
                                            accountingDate: date,
                                            amount: amount,
                                            category: {
                                                connect: {
                                                    id: category[0].id,
                                                },
                                            },
                                            info: info,
                                            isReservation: false,
                                        },
                                    });
                                    return [2 /*return*/];
                            }
                        });
                    }); })
                        .on("end", function () {
                        return "";
                    });
                    return [2 /*return*/];
            }
        });
    });
}
seed();
//# sourceMappingURL=seed.js.map