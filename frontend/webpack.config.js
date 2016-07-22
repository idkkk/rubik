module.exports = {
    entry: "./app/antd/entry.js",
    output: {
        path: "./build/",
        filename: 'bundle.js'
    },
    devServer: {
      inline: true,
      port: 8080
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.jpg$/, loader: "file-loader" },
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }            
        ]
    },
};