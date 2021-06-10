const { data } = require("autoprefixer")

module.exports = {
    siteMetadata: {
        title: `Kartavya Sharma`,
        description: `Kartavya Sharma's personal website. An aggregation of all his projects and blog posts.`,
        url: "https://www.kartavyas.com",
        twitterUsername: "floatyvariable"
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/content/images`,
                name: `content-images`,
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/content/`,
                name: `posts`,
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-vscode`,
                        options: {
                            theme: 'Dark+ (default dark)',
                            inlineCode: {
                                marker: '**',
                                className: 'inline-code-wrapper'
                            }
                        },
                    },
                    "gatsby-remark-normalize-paths",
                    "gatsby-remark-autolink-headers",
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 2048,
                        },
                    },
                ],
            },
        },
        `gatsby-plugin-gatsby-cloud`,
        {
            resolve: `gatsby-plugin-scroll-reveal`,
            options: {
                threshold: 0.1, // Percentage of an element's area that needs to be visible to launch animation
                once: true, // Defines if animation needs to be launched once
                disable: false, // Flag for disabling animations

                // Advanced Options
                selector: `[data-sal]`, // Selector of the elements to be animated
                animateClassName: `sal-animate`, // Class name which triggers animation
                disabledClassName: `sal-disabled`, // Class name which defines the disabled state
                rootMargin: `0% 50%`, // Corresponds to root's bounding box margin
                enterEventName: `sal:in`, // Enter event name
                exitEventName: `sal:out`, // Exit event name
            }
        },
        `gatsby-plugin-postcss`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`mdx`, `md`],
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
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data`
            },
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options:  {
                trackingIds: [
                    `${GA_Tracking_id}`
                ]
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `personal-website`,
                short_name: `kartavyas`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/logo.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-local-search`,
            options: {
                name: `searchPosts`,
                engine: `flexsearch`,
                query: `
                    {
                        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
                            nodes {
                                fields {
                                    slug
                                }
                                frontmatter {
                                    title
                                    date(formatString: "Do MMMM YYYY")
                                    thumbnail {
                                        childImageSharp {
                                            gatsbyImageData(
                                                placeholder: DOMINANT_COLOR
                                                formats: AUTO
                                                transformOptions: {fit: COVER}
                                                layout: CONSTRAINED
                                                width: 200
                                                height: 133
                                                quality: 100
                                            )
                                        }
                                        relativePath
                                    }
                                }
                                excerpt
                            }
                        }
                    }
                `,
                ref: `slug`,
                index: [`title`, `excerpt`],
                store: [`title`, `date`, `slug`, `excerpt`],
                normalizer: ({ data }) =>
                    data.allMarkdownRemark.nodes.map((node) => ({
                        title: node.frontmatter.title,
                        date: node.frontmatter.date,
                        excerpt: node.excerpt,
                        slug: node.fields.slug,
                    })),
            },
        },
    ],
}
