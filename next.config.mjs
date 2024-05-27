/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@mui/x-charts'],
    images: {
        domains: [
            'images.unsplash.com',
            'res.cloudinary.com'
        ],
    },
};

export default nextConfig;


