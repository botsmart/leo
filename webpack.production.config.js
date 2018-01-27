const path = require('path'),
    webpack = require('webpack'),
    {
        TsConfigPathsPlugin
    } = require('awesome-typescript-loader');

const PATHS = {
    entryPoint: path.resolve(__dirname, 'src/main.ts'),
    bundles: path.resolve(__dirname, '_bundles'),
}
module.exports = {
    entry: {
        'my-lib': [PATHS.entryPoint],
        'my-lib.min': [PATHS.entryPoint]
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            exclude: path.resolve(__dirname, "node_modules"),
            loader: "awesome-typescript-loader",
            exclude: /node_modules/,
            options: {
                configFileName: 'tsconfig.prod.json'
            },
        }],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        path: PATHS.bundles,
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'MyLib',
        umdNamedDefine: true
    },
    devtool: "source-map",
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: true,
            include: /\.min\.js$/,
        })
    ]
};