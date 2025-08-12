/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    images: {
        domains: ["localhost"],
        unoptimized: false,
    },
    swcMinify: true,
};

module.exports = nextConfig;
