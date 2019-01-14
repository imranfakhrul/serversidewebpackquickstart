const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
    entry: ["@babel/polyfill", "./index.js"],
    target: "node",
    mode: 'development', 
    externals: [nodeExternals()], 
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "server.build.js",
      libraryTarget: "commonjs2"
    },
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /(node_modules)/,
          loader: "babel-loader"
        }
      ]
    }
  };