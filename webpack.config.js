var webpack = require("webpack");

module.exports = {
    entry: {
        "app": "./app/boot"
    },
    output: {
        path: __dirname,
        filename: "./dist/bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.ts','.css','.html']
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {test: /\.html$/, loader:'raw-loader', exclude: /node_modules/},
            {test: /\.css$/, loader: 'style-loader!css-loader', exclude: /node_modules/},
            {test: /\.png$/, loader: 'url-loader?limit=100000', exclude: /node_modules/},
            {test: /\.jpg$/, loader: 'file-loader', exclude: /node_modules/}
        ]
    }
};
