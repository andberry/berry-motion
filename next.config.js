/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    image: {
        deviceSizes: [375, 640, 768, 1024, 1280, 1440, 1920],
        imageSizes: [64, 128, 192],
    },
};

module.exports = nextConfig;
