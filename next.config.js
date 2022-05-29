/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: '/',
  assetPrefix: './fiyat-listesi/',
}

module.exports = nextConfig
