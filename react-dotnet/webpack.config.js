const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    entry: {
        components: './Content/components/expose-components.js',
    },
    output: {
        filename: '[name].js',
        globalObject: 'this',
        path: path.resolve(__dirname, 'wwwroot/dist'),
    },
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    optimization: {
        runtimeChunk: {
            name: 'runtime',
        },
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
    plugins: [
        new WebpackNotifierPlugin()
    ]
};
