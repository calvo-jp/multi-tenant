// @ts-check

const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  swcMinify: false,
  images: {
    domains: ["media.graphassets.com"],
  },
  webpack(config, { isServer }) {
    if (isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }

    config.plugins.push(
      new NextFederationPlugin({
        name: "host",
        remotes: {
          remote: "remote@http://localhost:3001/remote-entry.js",
        },
        filename: "static/chunks/remote-entry.js",
        extraOptions: {},
      }),
    );

    return config;
  },
};
