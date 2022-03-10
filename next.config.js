/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
    ],
  },
};

module.exports = nextConfig;
