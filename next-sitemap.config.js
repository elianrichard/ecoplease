import { domain } from "./config";
/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: domain,
  generateRobotsTxt: true,
  exclude: ["/server-sitemap.xml"], 
  robotsTxtOptions: {
    additionalSitemaps: [
      `${domain}/server-sitemap.xml`, 
    ],
  },
};
