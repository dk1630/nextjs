// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://nextjs-seven-rosy-32.vercel.app/', // Replace with your site's URL
    generateRobotsTxt: true, // Generate robots.txt file
    sitemapSize: 5000, // Split sitemap if more than 5000 URLs
    changefreq: 'weekly', // Change frequency
    priority: 0.7, // Default priority
    exclude: [
        '/admin/*', // Exclude specific paths
    ],
    // Include additional configurations
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
            { userAgent: '*', disallow: '/admin' },
        ],
        additionalSitemaps: [
            'https://nextjs-seven-rosy-32.vercel.app/sitemap.xml', // Add additional sitemaps if you have any
        ],
    },
    // Add an extra path for sitemap
    additionalPaths: async (config) => [
        await config.transform(config, '/about'), // Add any custom page paths
    ],
};