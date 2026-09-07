import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://oneforalllabs.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // We can also list the subdomains here to help Google discover them!
    { url: 'https://impact.oneforalllabs.com', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://cron.oneforalllabs.com', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://catch.oneforalllabs.com', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://sanitize.oneforalllabs.com', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://decode.oneforalllabs.com', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://format.oneforalllabs.com', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://env.oneforalllabs.com', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://zone.oneforalllabs.com', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://dev.oneforalllabs.com', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];
}
