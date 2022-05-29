/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: '/fiyat-listesi',
  assetPrefix: '/github.com/gohugotr/fiyat-listesi/blob/git-pages/',
}

module.exports = nextConfig
