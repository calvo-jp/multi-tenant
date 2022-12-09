const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const sveltePreprocess = require("svelte-preprocess");

const mode = process.env.NODE_ENV || "development";
const prod = mode === "production";

/** @type {import("webpack").Configuration} */
module.exports = {
  mode,
  devtool: "source-map",
  devServer: {
    hot: true,
    port: 3001,
    static: "./dist",
    compress: true,
  },
  optimization: {
    runtimeChunk: false,
  },
  entry: "./src/index.ts",
  resolve: {
    alias: {
      svelte: path.dirname(require.resolve("svelte/package.json")),
    },
    extensions: [".mjs", ".js", ".ts", ".svelte"],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    uniqueName: "remote",
    publicPath: "auto",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: "svelte-loader",
          options: {
            compilerOptions: {
              dev: !prod,
            },
            emitCss: prod,
            hotReload: !prod,
            preprocess: sveltePreprocess({ sourceMap: !prod }),
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      minify: true,
      template: path.join(__dirname, "src/index.html"),
    }),
    new webpack.container.ModuleFederationPlugin({
      name: "remote",
      filename: "remote-entry.js",
      remotes: {},
      exposes: {
        "./index": "./src/App.svelte",
      },
      shared: {},
    }),
  ],
};
