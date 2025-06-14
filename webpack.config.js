const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  optimization: {
    minimize: false,
  },
  entry: {
    background: './src/background.ts',
    content: './src/content.ts',
    popup: './src/popup.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: './src/manifest.json',
          to: path.resolve(__dirname, 'dist'),
        },
        {
          from: './src/popup.html',
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
  ],
};
