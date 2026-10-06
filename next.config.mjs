/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Static oral surgery revision app lives in public/oral-surgery
      { source: '/oral-surgery', destination: '/oral-surgery/index.html', permanent: false },
    ];
  },
};
export default nextConfig;
