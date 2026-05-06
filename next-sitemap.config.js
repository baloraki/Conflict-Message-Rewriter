/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://burnafterchat.app',
  generateRobotsTxt: true,
  outDir: 'public',
  exclude: [
    '/imprint',
    '/contact',
    '/privacy',
    '/en/imprint',
    '/en/contact',
    '/en/privacy',
    '/de/imprint',
    '/de/contact',
    '/de/privacy',
    '/es/imprint',
    '/es/contact',
    '/es/privacy',
    '/tr/imprint',
    '/tr/contact',
    '/tr/privacy',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/chat',
          '/imprint',
          '/contact',
          '/privacy',
          '/en/imprint',
          '/en/contact',
          '/en/privacy',
          '/de/imprint',
          '/de/contact',
          '/de/privacy',
          '/es/imprint',
          '/es/contact',
          '/es/privacy',
          '/tr/imprint',
          '/tr/contact',
          '/tr/privacy',
        ],
      },
    ],
  },
};

module.exports = config;
