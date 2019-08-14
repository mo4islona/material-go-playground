const path = require("path");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'production',
  entry: path.resolve("src/GoPlayground.js"),
  output: {
    path: path.resolve("build"),
    publicPath: "/",
    library: '',
    libraryTarget: 'commonjs',
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  plugins: [
    new BundleAnalyzerPlugin()
  ],

  optimization: {
    minimize: true,
  },

  externals: {
    react: {
      commonjs2: 'react'
    },
    'react-dom': {
      commonjs2: 'react-dom'
    }
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { cacheDirectory: process.env.NODE_ENV === "development" },
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
