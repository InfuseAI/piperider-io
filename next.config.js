/** @type {import('next').NextConfig} */
const publicRuntimeConfig = require('./publicRuntimeConfig');

const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig,
  images: {
    unoptimized: true,
  },
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
