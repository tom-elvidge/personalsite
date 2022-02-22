const config = require('./config.js');

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.tomelvidge.com",
    title: config.title,
    description: "I am a Software Engineer with a particular interest in backend development, microservices, working with data, and the cloud. I enjoy tennis, rock climbing, and of course, all things technology! ",
    author: "@tomeldev"
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
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
