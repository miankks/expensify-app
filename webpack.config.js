// entry point - output

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// console.log(path.join(__dirname, 'public'));

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');
    return {
        entry: ['babel-polyfill', './src/app.js'],
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        // 'css-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                        // 'sass-loader'
                    ]
                })
            }]
        },
        plugins : [
            CSSExtract
        ],
        devtool: isProduction? 'source-map' : 'inline-source-map',
        // devtool: isProduction? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    }
};

// [
//     'style-loader',
//     'css-loader',
//     'sass-loader'
// ]