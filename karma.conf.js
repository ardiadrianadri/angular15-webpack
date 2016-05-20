// Karma configuration
// Generated on Wed May 18 2016 12:00:26 GMT+0200 (CEST)

var webpack = require("webpack");

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            {pattern: 'app/test/boot.test.js', included: true, watched: false},
        ],

        

        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'app/**/*.test.js': ['webpack','sourcemap']
        },

        webpack:{
            devtool: 'inline-source-map',
            resolve: {
                extensions: ['', '.js', '.ts','.css','.html']
            },
            module: {
                loaders: [
                    {test: /\.html$/, loader:'raw-loader'},
                    {test: /\.css$/, loader: 'style-loader!css-loader'},
                    {test: /\.png$/, loader: 'url-loader?limit=100000'},
                    {test: /\.jpg$/, loader: 'file-loader'},
                    {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
                    {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
                    {test: require.resolve("jquery"), loader: "imports?jQuery=jquery" }
                ]
            },
            plugins: [
                new webpack.ProvidePlugin({
                    $: "jquery",
                    jQuery: "jquery"
                })
            ]
        },

        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            noInfo: true
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,
        
        plugins:[
            require('karma-webpack'),
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-mocha-reporter',
            'karma-sourcemap-loader'
        ]
    })
}
