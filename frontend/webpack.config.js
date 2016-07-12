module.exports = {
    entry: "./app/entry.js",
    output: {
        path: "./build/",
        filename: "bundle.js"
    },
    devServer: {
      inline: true,
      port: 8080
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
};