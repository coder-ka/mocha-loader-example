const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 * Webpack Configuration
 */
module.exports = {
  mode: "production",

  entry: {
    // glob.sync("./test/**/*.spec.js")とかでもいい
    test: ["./test/sample1.spec.js", "./test/sample2.spec.js"]
  },

  output: {
    path: `${__dirname}/dist`,
    filename: "[name].[hash].js"
  },

  resolve: {
    extensions: [".js"]
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /spec\.js$/,
        use: {
          loader: "mocha-loader"
        },
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "test.html",
      inject: "body",
      chunks: ["test"]
    })
  ]
};
