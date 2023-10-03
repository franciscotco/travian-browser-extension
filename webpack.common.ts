import CopyWebpackPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { resolve } from "path";
import { type Configuration } from "webpack";

const config: Configuration = {
  entry: {
    popup: [resolve(__dirname, "src", "entries", "popup")],
    content: [resolve(__dirname, "src", "entries", "content")],
    background: [resolve(__dirname, "src", "entries", "background")]
  },
  optimization: {
    moduleIds: "named",
    splitChunks: {
      chunks: "all",
      name: false
    },
    usedExports: true
  },
  output: {
    clean: true,
    environment: {
      module: true,
    },
    path: resolve(__dirname, "dist"),
  },
  resolve: {
    alias: {
      "@src": resolve(__dirname, "src")
    },
    extensions: [".js", ".jsx", ".tsx", ".ts", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "public", "popup.html"),
      chunks: ["popup"],
      filename: "popup.html"
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: resolve(__dirname, "public", "manifest.json"),
        to: "manifest.json"
      }]
    })
  ]
};

export default config;
