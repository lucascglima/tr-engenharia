const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    user: process.env.NEXT_PUBLIC_USER,
    code: process.env.NEXT_PUBLIC_CODE,
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       styles: {
  //         name: "styles",
  //         type: "css/mini-extract",
  //         chunks: "all",
  //         enforce: true,
  //       },
  //     },
  //   },
  // },
  // plugins: [
  //   new MiniCssExtractPlugin({
  //     filename: "light.css",
  //   }),
  // ],
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: [MiniCssExtractPlugin.loader, "css-loader"],
  //     },
  //   ],
  // },
};
