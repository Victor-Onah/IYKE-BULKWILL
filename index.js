let express = require('express');
let next = require('next');
let mongoose = require('mongoose');
let cookieParser = require('cookie-parser');
let dev = process.env.NODE_ENV !== 'production';
let app = next({ dev });
let handler = app.getRequestHandler();

require('dotenv').config();

app
	.prepare()
	.then(() => {
		let server = express();
		let PORT = process.env.PORT || 3000;

		server.use(cookieParser());
		server.use(express.urlencoded({ extended: true }));
		server.use(express.json());
		server.use(express.static('./assets/public'));

		server.all('*', async (req, res, next) => handler(req, res));

		server.listen(PORT, () => console.log('Server is active'));
	})
	.catch((error) => console.error(error));
