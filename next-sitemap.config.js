/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.amartourstravels.com',
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000,
  exclude: ['/server-sitemap-index.xml'], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.amartourstravels.com/server-sitemap-index.xml', // <==== Add here
    ],
  },
}
