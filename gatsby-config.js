module.exports = {
  siteMetadata: {
    title: `Kartavya Sharma`,
    description: `Kartavya's portfolio website`,
    author: `Kartavya Sharma`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'content-images',
        path: `${__dirname}/src/content/images`,
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-normalize-paths",
            options: {
              pathFields: ["content-images", "cover"]
            },
          },
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "content-images",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    'gatsby-plugin-postcss',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['mdx', 'md'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static`,
        name: `static`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
