
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    allowedDevOrigins: ['*.replit.dev', '*.worf.replit.dev'],
    output: 'standalone',
    images: {
        unoptimized: true,
    }
};

export default nextConfig;
