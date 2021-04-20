import path from 'path'
import webpack from 'webpack'
import TerserPlugin from "terser-webpack-plugin"
import WebpackBundleAnalyzer from "webpack-bundle-analyzer"
import pkfInf from './package.json'
const config: webpack.Configuration = {
	entry: {
		"app": path.resolve(__dirname, "./src/index.ts"),
		"app.min": path.resolve(__dirname, "./src/index.ts"),
	},

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, './dist'),
	},

	devtool: "source-map",

	mode: "production",

	module: {
		rules: [
			{
				test: /\.(ts|tsx)?$/,
				loader: 'ts-loader',
			},
		]
	},

	plugins: [
		new webpack.DefinePlugin({
			"__TDSCORE_VERSION__": pkfInf.version,
			"__FOR_QJS__": false
		}),
		new webpack.ProgressPlugin(),
		new webpack.ProvidePlugin({
			process: 'process/browser',
		}),
		new WebpackBundleAnalyzer.BundleAnalyzerPlugin({
			analyzerMode: "static",
		}),
	],

	optimization: {
		minimizer: [
			//@ts-ignore
			new TerserPlugin({
				include: /\.min\.js$/,
				parallel: true,
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