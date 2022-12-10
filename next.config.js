// @ts-check

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  productionBrowserSourceMaps: true,
  images: {
    domains: ["i.pravatar.cc", "images.pexels.com"],
  },
};
