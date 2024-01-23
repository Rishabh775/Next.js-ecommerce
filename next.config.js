/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
 },
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
        {
          hostname:"avatars.githubusercontent.com"
        }],
      
  },

};

module.exports = nextConfig;
