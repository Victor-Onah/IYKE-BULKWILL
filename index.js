'use strict';
var __createBinding =
	(this && this.__createBinding) ||
	(Object.create
		? function (o, m, k, k2) {
				if (k2 === undefined) k2 = k;
				var desc = Object.getOwnPropertyDescriptor(m, k);
				if (
					!desc ||
					('get' in desc ? !m.__esModule : desc.writable || desc.configurable)
				) {
					desc = {
						enumerable: true,
						get: function () {
							return m[k];
						},
					};
				}
				Object.defineProperty(o, k2, desc);
		  }
		: function (o, m, k, k2) {
				if (k2 === undefined) k2 = k;
				o[k2] = m[k];
		  });
var __setModuleDefault =
	(this && this.__setModuleDefault) ||
	(Object.create
		? function (o, v) {
				Object.defineProperty(o, 'default', { enumerable: true, value: v });
		  }
		: function (o, v) {
				o['default'] = v;
		  });
var __importStar =
	(this && this.__importStar) ||
	function (mod) {
		if (mod && mod.__esModule) return mod;
		var result = {};
		if (mod != null)
			for (var k in mod)
				if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
					__createBinding(result, mod, k);
		__setModuleDefault(result, mod);
		return result;
	};
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const next_1 = __importDefault(require('next'));
const dotenv_1 = __importDefault(require('dotenv'));
const cookie_parser_1 = __importDefault(require('cookie-parser'));
const app_1 = __importDefault(require('./lib/modules/app'));
const bcrypt = __importStar(require('bcrypt'));
const mongoose_1 = __importDefault(require('mongoose'));
// Configuration for reading env variables
dotenv_1.default.config();
let dev = process.env.NODE_ENV !== 'production';
let app = (0, next_1.default)({ dev });
let handler = app.getRequestHandler();
// Prepare the application
app.prepare().then(async () => {
	try {
		await mongoose_1.default.connect(
			process.env.MONGODB_CONNECTION_STRING ||
				'' /* || 'mongodb://localhost:27017/' */
		);
		let server = (0, express_1.default)(),
			PORT = parseInt(process.env.PORT || '3000');
		server.use((0, cookie_parser_1.default)());
		server.use(express_1.default.urlencoded({ extended: true }));
		server.use(express_1.default.json());
		server.use(express_1.default.static('./assets/public'));
		/**
		 * Authorize the application to prevent hijacks
		 */
		async function authorize(req, res, next) {
			let authorization = req.headers['x-application-authorization-token'];
			if (!authorization) return void res.status(401).send();
			let isValidAuth = bcrypt.compare(
				process.env.APP_SECRET ? process.env.APP_SECRET : '',
				String(authorization)
			);
			if (!isValidAuth) return void res.status(401).send();
			return next();
		}
		// Handle reqest to get product
		server.get('/api/listings', authorize, async (req, res, next) => {
			try {
				let parsedQueryString = req.query;
				let { page, category } = parsedQueryString;
				res.json(
					await app_1.default.listings(
						Number(page),
						category ? category : undefined
					)
				);
			} catch (error) {
				console.error(error);
				res.status(500).send();
			}
		});
		// Handle search
		server.get('/api/search', authorize, async (req, res, next) => {
			try {
				let { q, category } = req.query;
				res.json(await app_1.default.search(q, category ? category : 'all'));
			} catch (error) {
				console.log(error);
				res.status(500).json([]);
			}
		});
		// Handle search suggestions
		server.get('/api/search/suggestions', authorize, async (req, res, next) => {
			try {
				let { q } = req.query;
				res.json(await app_1.default.searchSuggestions(q));
			} catch (error) {
				console.log(error);
				res.status(500).json([]);
			}
		});
		// Make Next.js handle all other requests
		server.all('*', async (req, res, next) => handler(req, res));
		server.listen(PORT, () =>
			console.log(`App is active and running on PORT: ${PORT}`)
		);
	} catch (error) {
		console.log(error);
	}
});
