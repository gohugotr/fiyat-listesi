/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  env: {
    PUBLIC_URL: 'https://gohugotr.github.io/fiyat-listesi/',
    assetPrefix: '/',
  },
}

module.exports = nextConfig
