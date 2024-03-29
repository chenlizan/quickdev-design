const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackTagsPlugin = require("html-webpack-tags-plugin");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const OpenBrowserPlugin = require("open-browser-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent");
const ESLintPlugin = require("eslint-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");

const PORT = 4001;

const clientConfig = {
  mode: "development",
  devServer: {
    port: PORT,
    historyApiFallback: true,
    hot: true,
  },
  devtool: "eval-source-map",
  entry: ["@babel/polyfill", "react-hot-loader/patch", path.resolve(__dirname, "src/index")],
  output: {
    chunkFilename: "chunk.[chunkhash:5].js",
    filename: "[name].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
              plugins: [
                ["@babel/plugin-proposal-decorators", { legacy: true }],
                ["@babel/plugin-proposal-class-properties", { loose: true }],
                ["@babel/plugin-proposal-optional-chaining"],
                ["import", { libraryName: "antd", style: "css" }, "ant"],
                ["import", { libraryName: "antd-mobile", style: "css" }, "ant-mobile"],
                ["lodash"],
                ["react-hot-loader/babel"],
              ],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: { limit: 8192 },
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        use: [{ loader: "file-loader" }],
      },
      {
        test: /\.css$/,
        exclude: [path.resolve(__dirname, "node_modules"), path.resolve(__dirname, "src/assets")],
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                getLocalIdent: getCSSModuleLocalIdent,
              },
            },
          },
          {
            loader: require.resolve("postcss-loader"),
            options: {
              ident: "postcss",
              plugins: [require("postcss-flexbugs-fixes"), require("autoprefixer")({ flexbox: "no-2009" })],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, "node_modules"), path.resolve(__dirname, "src/assets")],
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.less$/,
        exclude: [path.resolve(__dirname, "node_modules"), path.resolve(__dirname, "src/assets")],
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              modules: {
                getLocalIdent: getCSSModuleLocalIdent,
              },
            },
          },
          {
            loader: require.resolve("postcss-loader"),
            options: {
              ident: "postcss",
              plugins: [require("postcss-flexbugs-fixes"), require("autoprefixer")({ flexbox: "no-2009" })],
            },
          },
          {
            loader: "less-loader",
            options: { javascriptEnabled: true },
          },
        ],
      },
      {
        test: /\.less/,
        include: [path.resolve(__dirname, "node_modules"), path.resolve(__dirname, "src/assets")],
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "less-loader",
            options: { javascriptEnabled: true },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      "quickdev-lib-test": path.resolve("src/components"),
      "react-dom": "@hot-loader/react-dom",
    },
    extensions: [".ts", ".tsx", ".js", ".json", ".jsx"],
  },
  externals: {
    "quickdev-lib": "quickdev",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new webpack.DllReferencePlugin({
      context: path.join(__dirname, ".", "dll"),
      manifest: require("./dll/vendor-manifest.json"),
    }),
    new HtmlWebpackTagsPlugin({
      scripts: "../dll/vendor.dll.js",
      append: false,
    }),
    new MonacoWebpackPlugin({ languages: ["javascript", "json"] }),
    new ESLintPlugin({ fix: true }),
    new StylelintPlugin({
      configFile: ".stylelintrc",
      files: "**/*.(c|le)ss",
      fix: true,
    }),
    new OpenBrowserPlugin({
      url: `http://localhost:${PORT}`,
      browser: "chrome",
    }),
    new ProgressBarPlugin(),
  ],
  node: {
    module: "empty",
    dgram: "empty",
    dns: "mock",
    fs: "empty",
    http2: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty",
  },
  target: "web",
};

module.exports = clientConfig;
