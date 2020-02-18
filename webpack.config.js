const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "dist/"
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(jpg|png)$/,
        use: ["file-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        // The order matters - right to left - webpack will invoke sass-loader first, then convert sass to css with css-loader,
        // finally css to style with style-loader
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"], // @ scoped package
            plugins: ["transform-class-properties"]
          }
        }
      }
    ]
  },
  plugins: [new TerserPlugin()]
};
