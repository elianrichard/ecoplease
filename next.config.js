/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.ecoplease-edit.site"],
  },
};

module.exports = nextConfig;
