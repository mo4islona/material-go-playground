const path = require("path");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.resolve("src/index.js"),
  output: {
    path: path.resolve("dist"),
    filename: "index.js",
    library: "GoPlayground",
    libraryExport: 'default',
    libraryTarget: "umd",
    umdNamedDefine: true
    // libraryTarget: "commonjs2",
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  // plugins: [
  //   new BundleAnalyzerPlugin()
  // ],

  optimization: {
    minimizer: [new TerserPlugin({ /* additional options here */})],
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    },
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
