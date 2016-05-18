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
            {test: /\.html$/, loader:'raw-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.png$/, loader: 'url-loader?limit=100000'},
            {test: /\.jpg$/, loader: 'file-loader'},
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
            { test: require.resolve("jquery"), loader: "imports?jQuery=jquery" }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};
