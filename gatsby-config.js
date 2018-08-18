module.exports = {
  siteMetadata: {
    title: 'willworth.net',
    author: 'Will Worth',
    description: 'Personal site of musician and writer Will Worth.',
    siteUrl: 'https://www.willworth.net/',
  },

    pathPrefix: '/gatsby-starter-blog',
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/pages`,
          name: 'pages',
        },
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 590,
              },
            },
            {
              resolve: `gatsby-remark-responsive-iframe`,
              options: {
                wrapperStyle: `margin-bottom: 1.0725rem`,
              },
            },
            'gatsby-remark-prismjs',
            'gatsby-remark-copy-linked-files',
            'gatsby-remark-smartypants',
          ],
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          //trackingId: `ADD YOUR TRACKING ID HERE`,
        },
      },
      `gatsby-plugin-feed`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: 'gatsby-starter-default',
          short_name: 'starter',
          start_url: '/',
          background_color: '#663399',
          theme_color: '#bdc667',
          display: 'minimal-ui',
          icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
        },
      },
      `gatsby-plugin-offline`,
      `gatsby-plugin-react-helmet`,
      {
        resolve: 'gatsby-plugin-typography',
        options: {
          pathToConfigModule: 'src/utils/typography',
        },
      },
    ],
  }
  
    
  


