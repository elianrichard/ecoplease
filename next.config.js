/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["ecoplease-edit.site"],
  },
};

module.exports = nextConfig;
