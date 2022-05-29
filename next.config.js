/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: '/fiyat-listesi/blob/git-pages',
  assetPrefix: '/',
}

module.exports = nextConfig
