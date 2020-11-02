const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_PATH = path.resolve(__dirname, 'src');
const BUILD_PATH = path.resolve(__dirname, 'dist');
const PUBLIC_PATH = path.resolve(__dirname, 'public');
const LIBS_PATH = path.resolve(__dirname, 'libs');
const BUILD_FILE_NAME = 'main';
const LIBRARY_NAME = 'MAIN';
const LIBRARY_TARGET = 'umd';

const entry = {
};

entry[BUILD_FILE_NAME] = path.join(SRC_PATH, 'index.ts');

module.exports = {
  entry: entry,

  externals: {
  },

  output: {
    filename: '[name].js',
    path: BUILD_PATH,
    library: LIBRARY_NAME,
    libraryTarget: LIBRARY_TARGET
  },

  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: /\.vert$/,
        use: 'raw-loader'
      },
      {
        test: /\.frag$/,
        use: 'raw-loader'
      },
      {
        test: /\.glsl$/,
        use: 'raw-loader'
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "HTML boilerplate",
      template: path.resolve(SRC_PATH, 'index.html')
    })
  ],
  devServer: {
    contentBase: [PUBLIC_PATH],
    contentBasePublicPath: ['/'],
    writeToDisk: true,
    port: 8085
    //     watchContentBase: true,
  },
  resolve: {
    modules: [SRC_PATH, path.resolve(__dirname, 'node_modules'), LIBS_PATH],
    extensions: [ '.tsx', '.ts', '.js' ]
  },
};