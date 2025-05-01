/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    basePath: isProd ? '/humble-hackers' : '',
    assetPrefix: isProd ? '/humble-hackers/' : '',
    publicRuntimeConfig: {
        basePath: "/humble-hackers",
    },
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

export default nextConfig;
