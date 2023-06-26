/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.postimg.cc"],
  },
  /*async rewrites() {
    return [
      {
        source: '/movies/id',
        destination: '/movies/page',
      },
    ];
  },*/
};

module.exports = nextConfig;
