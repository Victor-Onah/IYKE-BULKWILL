'use strict';
var __awaiter =
	(this && this.__awaiter) ||
	function (thisArg, _arguments, P, generator) {
		function adopt(value) {
			return value instanceof P
				? value
				: new P(function (resolve) {
						resolve(value);
				  });
		}
		return new (P || (P = Promise))(function (resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value));
				} catch (e) {
					reject(e);
				}
			}
			function rejected(value) {
				try {
					step(generator['throw'](value));
				} catch (e) {
					reject(e);
				}
			}
			function step(result) {
				result.done
					? resolve(result.value)
					: adopt(result.value).then(fulfilled, rejected);
			}
			step((generator = generator.apply(thisArg, _arguments || [])).next());
		});
	};
var __generator =
	(this && this.__generator) ||
	function (thisArg, body) {
		var _ = {
				label: 0,
				sent: function () {
					if (t[0] & 1) throw t[1];
					return t[1];
				},
				trys: [],
				ops: [],
			},
			f,
			y,
			t,
			g;
		return (
			(g = { next: verb(0), throw: verb(1), return: verb(2) }),
			typeof Symbol === 'function' &&
				(g[Symbol.iterator] = function () {
					return this;
				}),
			g
		);
		function verb(n) {
			return function (v) {
				return step([n, v]);
			};
		}
		function step(op) {
			if (f) throw new TypeError('Generator is already executing.');
			while ((g && ((g = 0), op[0] && (_ = 0)), _))
				try {
					if (
						((f = 1),
						y &&
							(t =
								op[0] & 2
									? y['return']
									: op[0]
									? y['throw'] || ((t = y['return']) && t.call(y), 0)
									: y.next) &&
							!(t = t.call(y, op[1])).done)
					)
						return t;
					if (((y = 0), t)) op = [op[0] & 2, t.value];
					switch (op[0]) {
						case 0:
						case 1:
							t = op;
							break;
						case 4:
							_.label++;
							return { value: op[1], done: false };
						case 5:
							_.label++;
							y = op[1];
							op = [0];
							continue;
						case 7:
							op = _.ops.pop();
							_.trys.pop();
							continue;
						default:
							if (
								!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
								(op[0] === 6 || op[0] === 2)
							) {
								_ = 0;
								continue;
							}
							if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
								_.label = op[1];
								break;
							}
							if (op[0] === 6 && _.label < t[1]) {
								_.label = t[1];
								t = op;
								break;
							}
							if (t && _.label < t[2]) {
								_.label = t[2];
								_.ops.push(op);
								break;
							}
							if (t[2]) _.ops.pop();
							_.trys.pop();
							continue;
					}
					op = body.call(thisArg, _);
				} catch (e) {
					op = [6, e];
					y = 0;
				} finally {
					f = t = 0;
				}
			if (op[0] & 5) throw op[1];
			return { value: op[0] ? op[1] : void 0, done: true };
		}
	};
Object.defineProperty(exports, '__esModule', { value: true });
var express_1 = require('express');
var next_1 = require('next');
var dotenv_1 = require('dotenv');
var cookie_parser_1 = require('cookie-parser');
var app_1 = require('./lib/modules/app');
var bcrypt = require('bcrypt');
var mongoose_1 = require('mongoose');
// Configuration for reading env variables
dotenv_1.config();
var dev = process.env.NODE_ENV !== 'production';
var app = (0, next_1)({ dev: dev });
var handler = app.getRequestHandler();
// Prepare the application
app.prepare().then(function () {
	return __awaiter(void 0, void 0, void 0, function () {
		/**
		 * Authorize the application to prevent hijacks
		 */
		function authorize(req, res, next) {
			return __awaiter(this, void 0, void 0, function () {
				var authorization, isValidAuth;
				return __generator(this, function (_a) {
					authorization = req.headers['x-application-authorization-token'];
					if (!authorization)
						return [2 /*return*/, void res.status(401).send()];
					isValidAuth = bcrypt.compare(
						process.env.APP_SECRET ? process.env.APP_SECRET : '',
						String(authorization)
					);
					if (!isValidAuth) return [2 /*return*/, void res.status(401).send()];
					return [2 /*return*/, next()];
				});
			});
		}
		var server, PORT_1, error_1;
		return __generator(this, function (_a) {
			switch (_a.label) {
				case 0:
					_a.trys.push([0, 2, , 3]);
					return [
						4 /*yield*/,
						mongoose_1.connect(
							process.env.MONGODB_CONNECTION_STRING ||
								'' /* || 'mongodb://localhost:27017/' */
						),
					];
				case 1:
					_a.sent();
					(server = (0, express_1)()),
						(PORT_1 = parseInt('3000' || process.env.PORT));
					server.use((0, cookie_parser_1)());
					server.use(express_1.urlencoded({ extended: true }));
					server.use(express_1.json());
					server.use(express_1.static('./assets/public'));
					// Handle reqest to get product
					server.get('/api/listings', authorize, function (req, res, next) {
						return __awaiter(void 0, void 0, void 0, function () {
							var parsedQueryString, page, category, _a, _b, error_2;
							return __generator(this, function (_c) {
								switch (_c.label) {
									case 0:
										_c.trys.push([0, 2, , 3]);
										parsedQueryString = req.query;
										(page = parsedQueryString.page),
											(category = parsedQueryString.category);
										_b = (_a = res).json;
										return [
											4 /*yield*/,
											app_1.listings(
												Number(page),
												category ? category : undefined
											),
										];
									case 1:
										_b.apply(_a, [_c.sent()]);
										return [3 /*break*/, 3];
									case 2:
										error_2 = _c.sent();
										console.error(error_2);
										res.status(500).send();
										return [3 /*break*/, 3];
									case 3:
										return [2 /*return*/];
								}
							});
						});
					});
					// Handle search
					server.get('/api/search', authorize, function (req, res, next) {
						return __awaiter(void 0, void 0, void 0, function () {
							var _a, q, category, _b, _c, error_3;
							return __generator(this, function (_d) {
								switch (_d.label) {
									case 0:
										_d.trys.push([0, 2, , 3]);
										(_a = req.query), (q = _a.q), (category = _a.category);
										_c = (_b = res).json;
										return [
											4 /*yield*/,
											app_1.search(q, category ? category : 'all'),
										];
									case 1:
										_c.apply(_b, [_d.sent()]);
										return [3 /*break*/, 3];
									case 2:
										error_3 = _d.sent();
										console.log(error_3);
										res.status(500).json([]);
										return [3 /*break*/, 3];
									case 3:
										return [2 /*return*/];
								}
							});
						});
					});
					// Handle search suggestions
					server.get(
						'/api/search/suggestions',
						authorize,
						function (req, res, next) {
							return __awaiter(void 0, void 0, void 0, function () {
								var q, _a, _b, error_4;
								return __generator(this, function (_c) {
									switch (_c.label) {
										case 0:
											_c.trys.push([0, 2, , 3]);
											q = req.query.q;
											_b = (_a = res).json;
											return [4 /*yield*/, app_1.searchSuggestions(q)];
										case 1:
											_b.apply(_a, [_c.sent()]);
											return [3 /*break*/, 3];
										case 2:
											error_4 = _c.sent();
											console.log(error_4);
											res.status(500).json([]);
											return [3 /*break*/, 3];
										case 3:
											return [2 /*return*/];
									}
								});
							});
						}
					);
					// Make Next.js handle all other requests
					server.all('*', function (req, res, next) {
						return __awaiter(void 0, void 0, void 0, function () {
							return __generator(this, function (_a) {
								return [2 /*return*/, handler(req, res)];
							});
						});
					});
					server.listen(PORT_1, function () {
						return console.log(
							'App is active and running on PORT: '.concat(PORT_1)
						);
					});
					return [3 /*break*/, 3];
				case 2:
					error_1 = _a.sent();
					console.log(error_1);
					return [3 /*break*/, 3];
				case 3:
					return [2 /*return*/];
			}
		});
	});
});
