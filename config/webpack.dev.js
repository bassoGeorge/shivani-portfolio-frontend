///////////////////////////////////////////////////////////////////////////////
//                  Developmen env configuration for webpack                 //
///////////////////////////////////////////////////////////////////////////////

var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

module.exports = function(env) { return webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    // For each given css, we get a corresponding css file
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV),
                API_URL: JSON.stringify("http://localhost:7888") // TODO: get from ENV variable / ansible
            }
        }),
    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
}); };
