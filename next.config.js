/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    user: process.env.NEXT_PUBLIC_USER,
    code: process.env.NEXT_PUBLIC_CODE,
  },
};
