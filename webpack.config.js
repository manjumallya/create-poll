const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const stubServerConfig = require('./test/stubs');
const entryFile = './src/main.js'
const path = require('path')

module.exports = (mode) => {
    return{
        mode: 'development',
        entry: ['whatwg-fetch', entryFile],
        output: {
          path: path.resolve(__dirname,'dist'),
            filename: '[name].bundle.js',
            chunkFilename: 'js/[name].js'
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    use: 'vue-loader',
                },
                {
                    test: /\.css$/,
                    use: ["vue-style-loader", "css-loader"]
                },
                {
                    test: /\.js$/,
                    loader: "babel-loader",
                    exclude: /node_modules/
                },
                {
                    test: /\.svg(\?.*)?$/,
                    use: ['url-loader', 'svg-transform-loader'],
                },
                {
                    test: /\.png(\?.*)?$/,
                    use: ['url-loader', 'svg-transform-loader'],
                },
            ]
        },
        resolve: {
            alias: {
                vue: 'vue/dist/vue.js',
            },
            extensions: ['.js', '.vue'],
        },
        devServer: {
            contentBase: path.resolve(__dirname,'dist'),
            before(app) {
                stubServerConfig(app);
            },
            compress: true,
            overlay: true,
            open: true,
            hot: true,
            watchContentBase: true,
        },
        plugins: [
            new VueLoaderPlugin(),
            new HtmlWebpackPlugin({
                template: './src/index.html'
            }),
        ],
    }
}
