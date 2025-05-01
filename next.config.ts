/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/humble-hacker',
    assetPrefix: '/humble-hacker/',
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
