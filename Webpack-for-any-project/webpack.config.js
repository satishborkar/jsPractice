const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // Required for CSS file sepearation.
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
require('dotenv').config()

const ENV = process.env.APP_ENV;
const isTest = ENV === 'test'
const isProd = ENV === 'prod';

function setDevTool() {  // function to set dev-tool depending on environment
    if (isTest) {
      return 'inline-source-map';
    } else if (isProd) {
      return 'source-map';
    } else {
      return 'eval-source-map';
    }
}


// Minify and copy assets in production
if(isProd) {  // plugins to use in a production environment
    config.plugins.push(
        new UglifyJSPlugin(),  // minify the chunk
        new CopyWebpackPlugin([{  // copy assets to public folder
          from: __dirname + '/src/public'
        }])
    );
};

module.exports = {
    entry: __dirname + "/src/app/index.js", // webpack entry point. Module to start building dependency graph
    output: {
        path: __dirname + '/dist', // Folder to store generated bundle
        filename: 'bundle.js',  // Name of generated bundle after build
        publicPath: '/'
    },
    devtool: setDevTool(),  //Set the devtool
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: [/node_modules/ ]
            },
            {
                test: /\.(sass|scss)$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({  
                  fallback: 'style-loader',
                  use: [
                    { loader: 'css-loader'},
                    { loader: 'sass-loader'}
                  ],
                })
            }
        ]
    },
  plugins: [  // Array of plugins to apply to build chunk
      new HtmlWebpackPlugin({ template: __dirname + "/src/public/index.html", inject: 'body' }),
      new ExtractTextPlugin("styles.css"), // extract css to a separate file called styles.css
      new webpack.DefinePlugin({ API_KEY: JSON.stringify(process.env.API_KEY)    }) // plugin to define global constants
  ],
  devServer: {  // configuration for webpack-dev-server
      contentBase: './src/public',  //source of static assets
      port: 7700, // port to run dev-server
  }
  
};