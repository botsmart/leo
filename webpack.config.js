    var path = require('path');

    module.exports = {
        entry: "./src/main.ts",
        module: {
            // preLoaders: [{
            //     test: /\.ts$/,
            //     loader: 'tslint'
            // }],
            loaders: [{
                test: /\.ts$/,
                exclude: path.resolve(__dirname, "node_modules"),
                loader: "awesome-typescript-loader",
                exclude: /node_modules/
            }],
        },
        resolve: {
            extensions: ['.ts', '.js'],
        },
        output: {
            path: path.resolve(__dirname + '/lib/'),
            filename: '[name].js',
            publicPath: 'lib'
        },
        devServer: {
            contentBase: __dirname
        },
        devtool: "source-map"
    };