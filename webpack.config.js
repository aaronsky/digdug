/* global __dirname */

'use strict';

let path = require('path');

let webpack = require('webpack');
let CopyWebpackPlugin = require('copy-webpack-plugin');

let SRC_DIRECTORY = path.resolve(__dirname, 'src');
let HTML_DIRECTORY = path.resolve(__dirname, 'html');
let ASSETS_DIRECTORY = path.resolve(__dirname, 'assets');
let BUILD_DIRECTORY = path.resolve(__dirname, 'build');

module.exports = {
    entry: path.resolve(SRC_DIRECTORY, 'main.js'),
    output: {
        path: BUILD_DIRECTORY,
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: BUILD_DIRECTORY,
    },
    module: {
        loaders: [
            {
                loader: 'babel',
                test: SRC_DIRECTORY,
            }
        ]
    },
    plugins: [
        // Simply copies the files over
        new CopyWebpackPlugin([{
            from: HTML_DIRECTORY
        }, {
            from: ASSETS_DIRECTORY
        }]),
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
};