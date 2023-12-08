"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const next_1 = __importDefault(require("next"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app_1 = __importDefault(require("./lib/modules/app"));
const bcrypt = __importStar(require("bcrypt"));
const mongoose_1 = __importDefault(require("mongoose"));
const formidable_1 = __importDefault(require("formidable"));
const promises_1 = require("fs/promises");
const path_1 = require("path");
// Configuration for reading env variables
dotenv_1.default.config();
let dev = process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test';
let app = (0, next_1.default)({ dev });
let handler = app.getRequestHandler();
// Prepare the application
app.prepare().then(async () => {
    try {
        await mongoose_1.default.connect(process.env.NODE_ENV === 'development'
            ? 'mongodb://localhost:27017/'
            : String(process.env.MONGODB_CONNECTION_STRING));
        let server = (0, express_1.default)(), PORT = parseInt(process.env.PORT || '3000');
        server.use((0, cookie_parser_1.default)());
        server.use(express_1.default.urlencoded({ extended: true }));
        server.use(express_1.default.json());
        server.use(express_1.default.static('./assets/public'));
        /**
         * Authorize the application to prevent hijacks
         */
        async function authorize(req, res, next) {
            let authorization = req.headers['x-application-authorization-token'];
            if (!authorization)
                return void res.status(401).send();
            let isValidAuth = bcrypt.compare(process.env.APP_SECRET ? process.env.APP_SECRET : '', String(authorization));
            if (!isValidAuth)
                return void res.status(401).send();
            return next();
        }
        // Handle reqest to get product
        server.get('/api/listings', authorize, async (req, res, next) => {
            try {
                let parsedQueryString = req.query;
                let { page, category, all } = parsedQueryString;
                res.json(await app_1.default.listings(Number(page), category, all));
            }
            catch (error) {
                console.error(error);
                res.status(500).json([]);
            }
        });
        // Handle search
        server.get('/api/search', authorize, async (req, res, next) => {
            try {
                let { q, category } = req.query;
                res.json(await app_1.default.search(q, category ? category : 'all'));
            }
            catch (error) {
                console.error(error);
                res.status(500).json([]);
            }
        });
        // Handle search suggestions
        server.get('/api/search/suggestions', authorize, async (req, res, next) => {
            try {
                let { q } = req.query;
                res.json(await app_1.default.searchSuggestions(q));
            }
            catch (error) {
                console.error(error);
                res.status(500).json([]);
            }
        });
        /**
         * Post a message to the database
         */
        server.post('/api/message', authorize, async (req, res, next) => {
            try {
                let didUpload = await app_1.default.saveMessage(req.body);
                if (didUpload)
                    return res.json({ success: true });
                res.json({ success: false });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ success: false });
            }
        });
        /**
         * Post an order to the database
         */
        server.post('/api/order', authorize, async (req, res, next) => {
            try {
                let didUpload = await app_1.default.saveOrder(req.body);
                if (didUpload)
                    return res.json({ success: true });
                res.json({ success: false });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ success: false });
            }
        });
        /**
         * Authorize the admin
         */
        async function authorizeAdmin(req, res, next) {
            let authorization = req.headers['x-admin-authorization-token'];
            if (!authorization)
                return void res.status(401).send();
            if (authorization !== String(process.env.ADMIN_AUTH_TOKEN))
                return void res.status(401).send();
            return next();
        }
        /**
         * Upload a product
         */
        server.post('/api/admin/upload', authorizeAdmin, authorize, async (req, res, next) => {
            let form = (0, formidable_1.default)({ multiples: true });
            form.parse(req, async (err, fields, files) => {
                if (err)
                    return res.json({ success: false });
                let { productImage } = files, { filepath, newFilename, mimetype, size } = productImage[0], { productName, productCategory } = fields;
                try {
                    if (!(await app_1.default.uploadProduct({
                        id: newFilename,
                        category: productCategory[0],
                        mimetype,
                        name: productName[0],
                    })))
                        return res.json({ success: false });
                    await (0, promises_1.writeFile)(`${(0, path_1.resolve)(__dirname, './assets/public/images')}/${newFilename}.${mimetype.split('/')[1]}`, await (0, promises_1.readFile)(`${filepath}`));
                    res.json({ success: true });
                }
                catch (error) {
                    console.error(error);
                    res.status(500).json({ success: false });
                }
            });
        });
        /**
         * Delete products
         */
        server.delete('/api/admin/delete', authorizeAdmin, authorize, async (req, res, next) => {
            try {
                res.json({ success: await app_1.default.deleteProducts(req.body) });
            }
            catch (error) {
                res.status(500).json({ success: false });
            }
        });
        /**
         * Get messages
         */
        server.get('/api/admin/messages', authorizeAdmin, authorize, async (req, res, next) => {
            try {
                let messages = await app_1.default.getMessages();
                if (!messages)
                    return res.json([]);
                res.json(messages);
            }
            catch (error) {
                console.error(error);
                res.status(500).json([]);
            }
        });
        /**
         * Mark message as replied
         */
        server.patch('/api/admin/messages/mark/:messageId', authorizeAdmin, authorize, async (req, res, next) => {
            try {
                let { messageId } = req.params;
                if (await app_1.default.markMessageAsReplied(messageId))
                    res.json({ success: true });
                else
                    res.json({ success: false });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ success: false });
            }
        });
        /**
         * Get orders
         */
        server.get('/api/admin/orders', authorizeAdmin, authorize, async (req, res, next) => {
            try {
                let orders = await app_1.default.getOrders();
                if (!orders)
                    return res.json([]);
                res.json(orders);
            }
            catch (error) {
                console.error(error);
                res.status(500).json([]);
            }
        });
        /**
         * Mark order as completed
         */
        server.patch('/api/admin/orders/mark/:orderId', authorizeAdmin, authorize, async (req, res, next) => {
            try {
                let { orderId } = req.params;
                if (await app_1.default.markOrderAsCompleted(orderId))
                    res.json({ success: true });
                else
                    res.json({ success: false });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ success: false });
            }
        });
        /**
         * Mark order as completed
         */
        server.post('/api/admin/authorize', authorizeAdmin, authorize, async (req, res, next) => {
            try {
                let { username, password } = req.body;
                if (await app_1.default.authorizeAdmin(username, password))
                    res.json({ success: true });
                else
                    res.status(401).json({ success: false });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ success: false });
            }
        });
        // Make Next.js handle all other requests
        server.all('*', async (req, res, next) => handler(req, res));
        server.listen(PORT, () => console.error(`App is active and running on PORT: ${PORT}`));
    }
    catch (error) {
        console.error(error);
    }
});
