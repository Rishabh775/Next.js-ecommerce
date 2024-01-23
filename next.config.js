/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
        {
          hostname:"avatars.githubusercontent.com"
        }],
      
  },

};

module.exports = nextConfig;
