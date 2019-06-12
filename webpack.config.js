const webpack = require('webpack');
const path = require('path');

const DIR_SRC = path.join(__dirname, 'src');
const DIR_DIST = path.join(__dirname, 'dist');

const webpackConfig = {
    entry: path.join(DIR_SRC, 'index.js'),
    output: {
        path: DIR_DIST,
        filename: 'bundle.js'
    },
    module: {
        rules: []
    },
    devServer: {
        contentBase: DIR_DIST
    }
}