/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/humble-hackers',
    assetPrefix: '/humble-hackers/',
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
