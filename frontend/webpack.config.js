module.exports = {
    entry: "./app/antd/entry.js",
    output: {
        path: "./build/",
        filename: 'bundle.js'
    },
    devServer: {
      inline: true,
      port: 8081
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.json$/,loaders: [ 'json' ],exclude: /node_modules/,include: __dirname },
            { test: /\.jpg$/, loader: "file-loader" },
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }            
        ]
    },
};