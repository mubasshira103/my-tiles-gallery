/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {protocol:'https',
        hostname: 'images.unsplash.com',
        pathname:'**'
      }
    ]
  }
};

export default nextConfig;

// "image": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
