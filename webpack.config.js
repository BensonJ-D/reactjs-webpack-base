const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.tsx'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        // fallback: {
        //     "child_process": false,
        //     "fs": false,
        //     // and also other packages that are not found
        // }
    },
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        host: '0.0.0.0',
        port: 3000
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({template: "./src/index.html"}),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['ts-loader'],
            }
        ]
    }
};