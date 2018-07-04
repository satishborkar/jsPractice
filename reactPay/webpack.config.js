var path = require('path');

var config = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'bin'),
        filename: 'js/app.bundle.js',
    },
    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}
module.exports = config;