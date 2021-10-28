const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            template: 'src/assets/index.html'
        }),
    ],
    module: {
        rules: [{
            test: /\.scss$/i,
            use: [
                "style-loader",
                "css-loader",
                {
                    loader: 'sass-loader',
                    options: {
                        implementation: require('dart-sass')
                    }
                }
            ]
        }]
    }

}