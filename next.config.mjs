/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // All images are stored locally in /public. No remote image hosts are configured,
  // which keeps the project inside the Vercel Hobby plan's image-optimization budget.
  images: {
    formats: ['image/webp'],
  },
  // Fail the production build on type or lint errors instead of shipping broken content.
  typescript: { ignoreBuildErrors: false },
  eslint: { ignoreDuringBuilds: false },
};

export default nextConfig;
