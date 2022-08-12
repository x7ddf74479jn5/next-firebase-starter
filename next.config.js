/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  i18n: { locales: ["ja"], defaultLocale: "ja" },
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  compiler: {
    reactRemoveProperties: true,
  },
};

module.exports = nextConfig;
