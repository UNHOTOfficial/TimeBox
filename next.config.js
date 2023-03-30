/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
};

const withPWA = require("next-pwa")({
  disable: false,
  dest: "public",
  // disable: process.env.NODE_ENV === 'development',
  register: true,
  // scope: '/app',
  //sw: 'service-worker.js',
  skipWaiting: true,
});

module.exports = withPWA(nextConfig);
