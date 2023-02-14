/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        deviceSizes: [375, 640, 768, 1024, 1280, 1440, 1920, 2560],
        imageSizes: [64, 128, 192],
    },
};

module.exports = nextConfig;
