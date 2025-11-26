import type { MetadataRoute } from 'next'

const siteUrl = 'https://swiftfr-website.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changefreq: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changefreq: 'yearly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: new Date(),
      changefreq: 'yearly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/faqs`,
      lastModified: new Date(),
      changefreq: 'yearly',
      priority: 0.5,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changefreq: 'yearly',
      priority: 0.8,
    },
  ]
}
