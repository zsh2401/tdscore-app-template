import path from 'path'
import webpack from 'webpack'
import pkfInf from './package.json'
import TerserPlugin from "terser-webpack-plugin"
// const WEB = process.env.WEB !== undefined && process.env.WEB !== "0";
// const NODE_MajorVersion = Number.parseInt(process.version.split(".")[0].replace("v", ""));
const config: webpack.Configuration = {
	entry: {
		"qapp": path.resolve(__dirname, "src", "index.ts"),
		"qapp.min": path.resolve(__dirname, "src", "index.ts")
	},

	output: {
		filename: `[name].js`,
		path: path.resolve(__dirname, './dist'),
	},

	mode: "production",

	module: {
		rules: [
			{
				test: /\.(ts|tsx)?$/,
				loader: 'ts-loader',
				options: {
					configFile: "tsconfig.qjs.json"
				}
			},
		]
	},


	plugins: [
		new webpack.DefinePlugin({
			"__TDSCORE_VERSION__": pkfInf.version,
			"__FOR_QJS__": true
		}),
		new webpack.ProgressPlugin(),
		new webpack.ProvidePlugin({
			process: 'process/browser',
		}),
		// new WebpackBundleAnalyzer.BundleAnalyzerPlugin({
		// 	analyzerMode: "static",
		// }),
	],

	optimization: {
		minimizer: [
			//@ts-ignore
			new TerserPlugin({
				include: /\.min\.js$/,
				// cache: true,
				parallel: true,
				// sourceMap: true, // Must be set to true if using source-maps in production
				terserOptions: {},
			})
		]

	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		fallback: {
			util: require.resolve("util/"),
			os: require.resolve("os-browserify/browser")
		}
	}
};

export default config;