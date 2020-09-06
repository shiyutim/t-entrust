import babel from "rollup-plugin-babel"
import resolve from "rollup-plugin-node-resolve"

export default {
	input: "./src/index.js",
	output: {
		file: "dist/index.js",
		format: "cjs",
	},
	plugins: [
		resolve(),
		babel({
			exclude: "node_modules/**", // 只编译我们的源代码
			// externalHelpers: true,
		}),
	],
}
