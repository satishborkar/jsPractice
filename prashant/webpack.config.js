const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var config = {
    entry: './main.js',
    output: {
        path: __dirname + '/build',
        filename: 'app.bundle.js',
    },
    devServer: {
        inline: true,
        port: 2222
    },
    plugins: [
        new UglifyJsPlugin()
    ],
    module: {
        loaders: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}
module.exports = config;