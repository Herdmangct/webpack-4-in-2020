const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    "hello-world": "./src/hello-world.js",
    yosemite: "./src/yosemite.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: ""
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    index: "index.html",
    port: 8080
  },
  mode: "development",
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
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "**/*",
        path.join(process.cwd(), "build/**/*")
      ]
    }),
    new HtmlWebpackPlugin({
      filename: "hello-world.html",
      title: "Hello, world!",
      chunks: ["hello-world"],
      template: "src/page-template.hbs",
      description: "some description"
    }),
    new HtmlWebpackPlugin({
      filename: "yosemite.html",
      title: "Yosemite",
      chunks: ["yosemite"],
      template: "src/page-template.hbs",
      description: "some description"
    })
  ]
};
