const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'development',
  target: 'node',
  externals: [nodeExternals()],
  entry: './src/server.ts',
  output: {
    path: path.join(__dirname, "dist"),
    filename: "server.js"
  },
  module: {
    rules: [{
      enforce: 'pre',
      loader: 'tslint-loader',
      test: /\.ts$/,
      exclude: [
        /node_modules/
      ],
      options: {
        emitErrors: true
      }
    },
    {
      // 拡張子 .ts の場合
      test: /\.ts$/,
      // TypeScript をコンパイルする
      use: 'ts-loader'
    }]
  },
  resolve: {
    modules: [
      "node_modules", // node_modules 内も対象とする
    ],
    extensions: [
      ".ts",
      ".js"
    ]
  },
}