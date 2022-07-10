const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: './app/src/js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app/dist'),
        clean: true
    },
    module: {
        rules: [
            { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerWebpackPlugin(),
            '...'
        ]
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new HtmlWebpackPlugin({
            template: './app/src/index.html',
            filename: 'index.html',
            hash: true
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 3000
    }
};