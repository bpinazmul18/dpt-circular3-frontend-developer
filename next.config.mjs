/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/master_price",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
