"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const fuse_js_1 = __importDefault(require("fuse.js"));
/**
 * Database to be used for the application
 */
let db = mongoose_1.default.connection.useDb('IYKE_BULKWILL'), productSchema = new mongoose_1.default.Schema({
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
class App {
    static appName = 'IYKE-BULKWILL';
    /**
     * Get the products listed for a particular category
     */
    static async listings(page = 1, category = '') {
        try {
            if (category === 'all' ||
                category.length === 0 ||
                category.trim() === '' ||
                category === '') {
                return await productModel
                    .find()
                    .where()
                    .skip(10 * (page - 1))
                    .limit(10);
            }
            else {
                return await productModel
                    .find({ category })
                    .skip(10 * (page - 1))
                    .limit(10);
            }
        }
        catch (error) {
            console.error(error);
            return [];
        }
    }
    /**
     * Carries out a search based on the search query
     */
    static async search(query = '', category = 'all') {
        try {
            let doc;
            if (category === 'all') {
                doc = await productModel.find();
            }
            else {
                doc = await productModel.find({ category });
            }
            let options = {
                keys: ['name', 'description', 'category'],
            }, fuse = new fuse_js_1.default(doc, options);
            return fuse
                .search(query)
                .sort((a, b) => b.refIndex - a.refIndex)
                .map((p) => p.item);
        }
        catch (error) {
            console.error(error);
            return [];
        }
    }
    /**
     * Get auto completion for search
     */
    static async searchSuggestions(query = '') {
        try {
            let doc = await productModel.find();
            let options = {
                keys: ['name', 'description', 'category'],
            }, fuse = new fuse_js_1.default(doc, options);
            return fuse
                .search(query)
                .sort((a, b) => b.refIndex - a.refIndex)
                .map((p) => p.item.name);
        }
        catch (error) {
            console.error(error);
            return [];
        }
    }
}
exports.default = App;
