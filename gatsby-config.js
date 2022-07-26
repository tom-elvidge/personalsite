const config = require('./config.js');

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.tomelvidge.com",
    title: config.title,
    description: "I am a Software Engineer with a particular interest in Kubernetes, .NET, DevEx and DevOps. I enjoy tennis, rock climbing, and of course, all things technology! ",
    author: "@tomeldev"
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.tomelvidge.com',
        sitemap: 'https://www.tomelvidge.com/sitemap/sitemap-index.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.title,
        short_name: config.longTitle,
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#303443',
        display: 'standalone',
        icon: 'static/images/me.jpeg'
      },
    },
  ],
};
