/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    REACT_SECRET_KEY: process.env.REACT_SECRET_KEY,
  },
};

export default nextConfig;
