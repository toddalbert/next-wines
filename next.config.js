/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.vivino.com',
      'thumbs.vivino.com',
      'www.wine-searcher.com',
      's.wine.style',
    ],
  },
}

module.exports = nextConfig
