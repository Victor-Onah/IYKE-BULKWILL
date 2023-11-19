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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var fuse_js_1 = require("fuse.js");
/**
 * Database to be used for the application
 */
var db = mongoose_1.default.connection.useDb('IYKE_BULKWILL'), productSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ['solar panels', 'cctvs', 'phones', 'laptops', 'security lights'],
        required: true,
    },
    inStock: {
        type: Boolean,
        required: true,
        default: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    quantity: {
        type: String || Number,
        required: true,
        default: 100,
    },
    dateUploaded: {
        type: Date || Number || String,
        required: true,
        default: new Date().toDateString(),
    },
    quantityPurchased: {
        type: Number,
        required: true,
        default: 0,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
}), orderSchema = new mongoose_1.default.Schema({
    customerContact: {
        type: [],
        required: true,
    },
    products: {
        type: [],
        required: true,
    },
    dateCreated: {
        type: Date || Number || String,
        required: true,
    },
    totalItems: {
        type: Number,
        required: true,
    },
    totalUniqueItems: {
        type: Number,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
}), productModel = db.model('product', productSchema), orderModel = db.model('order', orderSchema);
/**
 * App declaration containing all the methods required for functionality.
 */
var App = /** @class */ (function () {
    function App() {
    }
    /**
     * Get the products listed for a particular category
     */
    App.listings = function (page, category) {
        if (page === void 0) { page = 1; }
        if (category === void 0) { category = ''; }
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        if (!(category === 'all' ||
                            category.length === 0 ||
                            category.trim() === '' ||
                            category === '')) return [3 /*break*/, 2];
                        return [4 /*yield*/, productModel
                                .find()
                                .where()
                                .skip(10 * (page - 1))
                                .limit(10)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, productModel
                            .find({ category: category })
                            .skip(10 * (page - 1))
                            .limit(10)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [2 /*return*/, []];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Carries out a search based on the search query
     */
    App.search = function (query, category) {
        if (query === void 0) { query = ''; }
        if (category === void 0) { category = 'all'; }
        return __awaiter(this, void 0, void 0, function () {
            var doc, options, fuse, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        doc = void 0;
                        if (!(category === 'all')) return [3 /*break*/, 2];
                        return [4 /*yield*/, productModel.find()];
                    case 1:
                        doc = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, productModel.find({ category: category })];
                    case 3:
                        doc = _a.sent();
                        _a.label = 4;
                    case 4:
                        options = {
                            keys: ['name', 'description', 'category'],
                        }, fuse = new fuse_js_1.default(doc, options);
                        return [2 /*return*/, fuse
                                .search(query)
                                .sort(function (a, b) { return b.refIndex - a.refIndex; })
                                .map(function (p) { return p.item; })];
                    case 5:
                        error_2 = _a.sent();
                        console.error(error_2);
                        return [2 /*return*/, []];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get auto completion for search
     */
    App.searchSuggestions = function (query) {
        if (query === void 0) { query = ''; }
        return __awaiter(this, void 0, void 0, function () {
            var doc, options, fuse, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, productModel.find()];
                    case 1:
                        doc = _a.sent();
                        options = {
                            keys: ['name', 'description', 'category'],
                        }, fuse = new fuse_js_1.default(doc, options);
                        return [2 /*return*/, fuse
                                .search(query)
                                .sort(function (a, b) { return b.refIndex - a.refIndex; })
                                .map(function (p) { return p.item.name; })];
                    case 2:
                        error_3 = _a.sent();
                        console.error(error_3);
                        return [2 /*return*/, []];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    App.appName = 'IYKE-BULKWILL';
    return App;
}());
exports.default = App;
