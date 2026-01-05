/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['@salowal/ui'],
    trailingSlash: true,
    output: 'export',
    images: {
        unoptimized: true,
        formats: ['image/avif', 'image/webp'],
    },
};

module.exports = nextConfig;
