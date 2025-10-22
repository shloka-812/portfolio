/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './src/lib/imageLoader.ts',
    unoptimized: true,
  },
  basePath: '/portfolio', // uncomment only if deploying to a subpath
  assetPrefix: '/portfolio/', // ✅ ensures _next/ assets are fetched correctly
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
