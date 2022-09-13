/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.ecoplease.hrefid.com"],
  },
};

module.exports = nextConfig;
