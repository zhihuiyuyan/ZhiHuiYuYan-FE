/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['s2.loli.net'],
  },
  swcMinify: true,
};

export default nextConfig;
