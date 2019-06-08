const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: "IcedMonk's Portfolio", // Navigation and Site Title
  siteTitleAlt: 'IcedMonk', // Alternative Site title for SEO
  siteTitleShort: 'IcedMonk', // short_name for manifest
  siteHeadline: 'Intrested in Hiring Me?', // Headline for schema.org JSONLD
  siteUrl: 'https://codesnatchers.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Hi myself samyek sonawane(IcedMonk). I am a fullstack web developer.',
  author: 'Samyek', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '#', // Twitter Username
  ogSiteName: 'codesnatchers', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: '',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
