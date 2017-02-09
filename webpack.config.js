var path = require('path');
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: [
		'./src/client.js',
	],

  output: {
    path: path.resolve(__dirname, '.www'),
    filename: 'bundle.js',
    publicPath: '/'
  },

	resolve: {
		enforceExtension: false,
		extensions: ['.css', '.js', '.jsx', '.json'],
		modules: [
			'node_modules',
			path.resolve(__dirname, './node_modules')
		]
	},

	cache: true,

	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					"babel-loader",
				],
				exclude: /node_modules/
			},
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
		          fallback: "style-loader",
		          use: "css-loader!postcss-loader"
		        })
				}
    ]
  },

  plugins: [
		new webpack.NamedModulesPlugin(),
		new ExtractTextPlugin({
			filename: 'bundle.css',
			allChunks: true,
			disable: false,
		}),
		new webpack.LoaderOptionsPlugin({
		  options: {
		    postcss: [autoprefixer]
		  }
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development')
			}
		}),
		new webpack.NoEmitOnErrorsPlugin()
  ],

	devtool: 'inline-source-map',

	devServer: {
		port: 3001,
		hot: false,
		publicPath: '/',
		contentBase: path.resolve(__dirname, 'www'),
		historyApiFallback: true,
		stats: "verbose"
	}
}
