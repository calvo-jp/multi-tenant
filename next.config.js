// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  productionBrowserSourceMaps: true,
  images: {
    domains: ["i.pravatar.cc"],
  },
};

module.exports = nextConfig;
