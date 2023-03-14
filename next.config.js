/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: '/gohugotr/fiyat-listesi',
  assetPrefix: '../',
}

module.exports = nextConfig
