const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const path = require("path");

module.exports = {
    entry: {
        vendor: "./vendor.js",
        app: "./main.js"
    },

    resolve: {
        extensions: [".js", ".jsx"]
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: {
                        loader: "css-loader",
                        query: {
                            modules: true
                        }
                    }
                })
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: "file-loader?name=public/fonts/[name].[ext]"
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ["app", "vendor"]
        }),
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": 'jquery'
        }),
        new ExtractTextPlugin({
            filename: "[name].css"
        })
    ]
};