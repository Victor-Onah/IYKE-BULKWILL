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
const db = mongoose_1.default.connection.useDb('IYKE_BULKWILL');
const productSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: [
            'solar panels',
            'cctvs',
            'phones',
            'laptops',
            'security lights',
            'home lights',
        ],
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
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
}), messageSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
}), productModel = db.model('product', productSchema), orderModel = db.model('order', orderSchema), messageModel = db.model('message', messageSchema);
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
                keys: ['name', 'category'],
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
    /**
     * Save customer order
     */
    static async saveOrder(order) {
        try {
            await orderModel.create(order);
            return true;
        }
        catch (error) {
            console.error(error);
            return false;
        }
        return true;
    }
    /**
     * Retrieves all orders or a single order
     */
    static async getOrders(id) {
        try {
            if (!id)
                return orderModel.find();
            else
                return orderModel.findOne({ _id: id });
        }
        catch (error) {
            console.error(error);
            return [];
        }
    }
    /**
     * Saves a users message
     */
    static async saveMessage(message) {
        try {
            await messageModel.create(message);
            return true;
        }
        catch (error) {
            console.error(error);
            return false;
        }
    }
}
exports.default = App;
