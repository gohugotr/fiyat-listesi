/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: 'fiyat-listesi/',
  assetPrefix: '/',
}

module.exports = nextConfig
