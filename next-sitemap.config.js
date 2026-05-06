/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dontsend.org';

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl,
  generateRobotsTxt: true,
  outDir: 'public',
  exclude: [
    '/imprint',
    '/contact',
    '/privacy',
    '/datenschutz',
    '/en/imprint',
    '/en/contact',
    '/en/privacy',
    '/de/imprint',
    '/de/contact',
    '/de/privacy',
    '/de/datenschutz',
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
          '/datenschutz',
          '/en/imprint',
          '/en/contact',
          '/en/privacy',
          '/de/imprint',
          '/de/contact',
          '/de/privacy',
          '/de/datenschutz',
          '/es/imprint',
          '/es/contact',
          '/es/privacy',
          '/tr/imprint',
          '/tr/contact',
          '/tr/privacy',
        ],
      },
    ],
    additionalSitemaps: [`${siteUrl}/sitemap.xml`],
  },
};

module.exports = config;
