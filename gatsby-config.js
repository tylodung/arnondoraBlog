module.exports = {
  siteMetadata: {
    title: 'Hello World',
    author: 'Arnon Puitrakul',
    description: 'Mad Programmer Diary',
    siteUrl: "https://www.arnondora.in.th",
    authorTwitter: '@arnondora',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-remark-responsive-iframe`, {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `${process.env.GOOGLE_ANALYTICS_TRACKING_ID}`,
        anonymize: true
      }
    }, {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Hello World - Mad Programmer Diary",
        short_name: "arnondora",
        start_url: "/",
        background_color: "#0f94f6",
        theme_color: "#0f94f6",
        display: "minimal-ui",
        icons: [
          {
            src: `./src/assets/favicon.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    }, {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#0f94f6`,
        showSpinner: false
      }
    }, {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Open Sans\:300,400,700`]
      }
    }, {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${process.env.gatsby_executing_command === "develop"? __dirname + "/src/sample-articles" : __dirname + "/src/articles"}`,
        name: 'pages'
      }
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    }, {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: true
            }
          }, {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-emoji'
        ]
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
       resolve: `gatsby-plugin-favicon`,
       options: {
         logo: "./src/assets/favicon.png",
         injectHTML: true,
         icons: {
           android: true,
           appleIcon: true,
           appleStartup: true,
           coast: false,
           favicons: true,
           firefox: true,
           twitter: false,
           yandex: false,
           windows: false
         }
       }
     },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-remove-trailing-slashes`
  ]
}
