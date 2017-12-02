'use strict';

const path = require('path');

module.exports = {
    entry: {
        app: './content/js/app.js',
        test: './content/js/test.js',
        ts: './content/js/ts.ts'
    },
    output: {
        path: path.resolve(__dirname, './wwwroot/js'),
        filename: '[name].js',
        chunkFilename: "[id].js",
        publicPath: '/js/',
        library: '_',
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    devtool: 'source-map',
    plugins: []
};