/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
};

const withPWA = require("next-pwa")({
  //disable: process.env.NODE_ENV === "development",
  dest: "public",
  register: true,
  skipWaiting: false,
  runtimeCaching,
});

module.exports = withPWA(nextConfig);
