let colors = require('tailwindcss/colors');

module.exports = {
	content: [
		'./pages/**/*.tsx',
		'./pages/**/*.jsx',
		'./components/**/*.tsx',
		'./components/**/*.jsx',
	],
	theme: {
		extend: {
			colors: {
				...colors,
				btn_default: '#a52a2a',
				btn_hover: '#bb3c3c',
				bg_primary: '#a52a2a',
				text_primary: '#f1f1f1',
				text_secondary: '#bb3c3c',
			},
		},
	},
	plugins: [],
};
