/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  optimizeFonts: false,
  images: {
    domains: ['cdn.sanity.io', 'res.cloudinary.com'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  }
}
