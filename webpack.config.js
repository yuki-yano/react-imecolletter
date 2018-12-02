const webpack = require("webpack")
const path = require("path")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")

const baseConfig = {
  mode: process.env.NODE_ENV || "development",
  node: {
    __dirname: false
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/")
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: { transpileOnly: true }
          },
          { loader: "tslint-loader" }
        ],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [new ForkTsCheckerWebpackPlugin()],

  resolve: {
    extensions: [".js", ".ts", ".tsx", ".json"]
  },

  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "src"),
    inline: true,
    hot: true
  }
}

const mainConfig = Object.assign({}, baseConfig, {
  name: "main",
  target: "electron-main",
  entry: {
    "main/index": "./src/main/index.ts"
  }
})

const rendererConfig = Object.assign({}, baseConfig, {
  name: "renderer",
  target: "electron-renderer",
  entry: {
    "renderer/index": "./src/renderer/index.tsx"
  }
})

module.exports = [mainConfig, rendererConfig]
