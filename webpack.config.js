const path = require('path');
const VueLoader = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
require('babel-polyfill');

module.exports = {
    cache: true,
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        host: '0.0.0.0',
        port: 8001
    },
    entry: ['@babel/polyfill', './src/index.ts'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    plugins: [
        new VueLoader.VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        ts: 'ts-loader'
                    },
                    esModule: true
                }
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.json',
                            appendTsSuffixTo: [/\.vue$/]
                        }
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {sourceMap: true}
                    },
                    {
                        loader: 'postcss-loader',
                        options: {sourceMap: true}
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {sourceMap: true}
                    },
                    {
                        loader: 'postcss-loader',
                        options: {sourceMap: true}
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'dist/'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src/'),
        },
        extensions: ['.tsx', '.ts', '.js']
    },
};
