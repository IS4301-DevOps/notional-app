/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['tailwindui.com', 'www.dbs.com', 'img.icons8.com'],
  },
};

module.exports = nextConfig;
