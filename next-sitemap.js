let robotsPolicy = [{ userAgent: '*', allow: '/' }];
if (process.env.ENVIRONMENT !== 'production') {
	robotsPolicy = [{ userAgent: '*', disallow: '/' }];
}

module.exports = {
	siteUrl: process.env.SITE_URL || 'https://localhost:3000',
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: robotsPolicy,
	},
};
