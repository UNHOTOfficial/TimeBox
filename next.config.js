/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
};

const withPWAInit = require("next-pwa");

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",

  exclude: [
    // add buildExcludes here
    ({ asset, compilation }) => {
      if (
        asset.name.startsWith("server/") ||
        asset.name.match(
          /^((app-|^)build-manifest\.json|react-loadable-manifest\.json)$/
        )
      ) {
        return true;
      }
      if (isDev && !asset.name.startsWith("static/runtime/")) {
        return true;
      }
      return false;
    },
  ],
});

module.exports = withPWA(nextConfig);
