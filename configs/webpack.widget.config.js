const path = require("path");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.resolve("src/index.js"),
  output: {
    path: path.resolve("dist"),
    filename: "widget.min.js",
    library: "GoPlayground",
    libraryExport: 'default',
    libraryTarget: "umd",
    umdNamedDefine: true
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  // plugins: [
  //   new BundleAnalyzerPlugin()
  // ],

  optimization: {
    minimizer: [new TerserPlugin({})],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
};
