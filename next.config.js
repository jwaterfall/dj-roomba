/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pwa: {
    disable: process.env.NODE_ENV === 'development',
  },
  images: {
    domains: [
      'img.youtube.com',
      'i.ytimg.com',
      'i.scdn.co',
      'mosaic.scdn.co',
      'daily-mix.scdn.co',
      'newjams-images.scdn.co',
      'lineup-images.scdn.co',
      'seed-mix-image.spotifycdn.com',
      'thisis-images.scdn.co',
      'seeded-session-images.scdn.co',
      'mixed-media-images.spotifycdn.com',
      'charts-images.scdn.co',
      'misc.scdn.co',
    ],
  },
};

module.exports = nextConfig;
