const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')

const config = require('config')

const isDev = (process.env.NODE_ENV === 'development')
const appEntry = './client/app'

const defineEnvPlugin = new webpack.DefinePlugin({
  __DEV__: isDev
})

let entryScripts = [ appEntry ]
let output = {
  path: path.join(__dirname, [ '/', config.get('buildDirectory') ].join('')),
  filename: 'bundle.js'
}

let webpack_isomorphic_tools_plugin = ""
if (isDev) {
  webpack_isomorphic_tools_plugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools-configuration')).development()
} else {
  webpack_isomorphic_tools_plugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools-configuration'))
}


const plugins = [
  defineEnvPlugin,
  webpack_isomorphic_tools_plugin,
  new ExtractTextPlugin('styles.css'),
  new webpack.NoErrorsPlugin(),
  new HtmlWebpackPlugin({
    template: './universal/index.tpl.html'
  }),
]

let moduleLoaders = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: 'babel'
  },
  {
    test: /\.json$/,
    loader: "json-loader"
  },
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('css-loader?modules&importLoaders=1&localIdentName=[path][name]__[local]___[hash:base64:5]')
  },
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract(['css','sass'])
  },
  {
    test: webpack_isomorphic_tools_plugin.regular_expression('images'),
    //test: /\.(ico|jpe?g|png|gif)$/,
    loader: 'url-loader?limit=10240' // any image below or equal to 10K will be converted to inline base64 instead
  },
  {
    test: /\.(woff|woff2|ttf|otf|eot\?#.+|svg#.+)$/,
    loader: "file?name=fonts/[name].[ext]"
  }
]

if (isDev) {
  output.publicPath = 'http://localhost:3001/'
  plugins.push(new webpack.HotModuleReplacementPlugin())
  entryScripts = [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    appEntry
  ]

  moduleLoaders = [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel' //,
      // doesn't work Cannot define 'query' and multiple loaders in loaders list
      // query: { // enzyme karma conf
      //  presets: ['aibnb']
      //}
    },
    {
      test: /\.json$/,
      loader: "json-loader"
    },
    {
      test: /\.css$/,
      loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[path][name]__[local]___[hash:base64:5]'
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(['css','sass'])
    },
    {
      test: webpack_isomorphic_tools_plugin.regular_expression('images'),
      //test: /\.(ico|jpe?g|png|gif)$/,
      loader: 'url-loader?limit=10240', // any image below or equal to 10K will be converted to inline base64 instead
    },
    {
       test: /\.(woff|woff2|ttf|otf|eot\?#.+|svg#.+)$/,
       loader: "file?name=fonts/[name].[ext]"
     }
  ]
}

module.exports = {
  // context: './universal',
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  externals: {
      'cheerio': 'window', // might not be needed with enzyme karma conf
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true
  },
  devtool: 'inline-source-map', // enzyme karm conf was 'eval' on 3REE
  entry: entryScripts,
  output: output,
  plugins: plugins,
  module: {
    loaders: moduleLoaders
  }
}
