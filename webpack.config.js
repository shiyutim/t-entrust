const path = require("path")

module.exports = {
	entry: {
		"tentrust.module": "./tentrust.module.js",
		tentrust: "./tentrust.js",
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: "babel-loader",
					},
				],
			},
		],
	},
}
