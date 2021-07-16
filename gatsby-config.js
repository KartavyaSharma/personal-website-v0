const { data } = require("autoprefixer")

const config = {
    siteMetadata: {
        title: `Kartavya Sharma`,
        description: `Kartavya Sharma's personal website. An aggregation of all his projects and blog posts.`,
        url: "https://www.kartavyas.com",
        twitterUsername: "floatyvariable"
    },
    plugins: [
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                allowNamespaces: true,
            },
        },
        {
            resolve: `gatsby-plugin-create-client-paths`,
            options: { prefixes: [`/app/*`] },
        },
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
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 896,
                            loading: 'lazy',
                            quality: 100,
                            
                        },
                    },
                    {
                        resolve: `gatsby-remark-autolink-headers`,
                        options: {
                            offsetY: `100`,
                            icon: `
                                    <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="24" height="24" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
                                    </svg>
                                `,
                            className: `link-headers`,
                            maintainCase: true,
                            removeAccents: true,
                            isIconAfterHeader: true,
                            elements: [`h1`, `h3`],
                        },
                    },
                    {
                        resolve: 'gatsby-remark-code-titles',
                        options: {
                            className: 'highlight-headers',
                        },
                    },
                    {
                        resolve: `gatsby-remark-vscode`,
                        options: {
                            theme: 'Tomorrow Night Blue',
                            inlineCode: {
                                marker: '**',
                                className: 'inline-code-wrapper'
                            }
                        },
                    },
                    "gatsby-remark-normalize-paths",
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
                threshold: 0.1,
                once: true,
                disable: false,
                selector: `[data-sal]`,
                animateClassName: `sal-animate`,
                disabledClassName: `sal-disabled`,
                rootMargin: `0% 50%`,
                enterEventName: `sal:in`,
                exitEventName: `sal:out`,
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
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `personal-website`,
                short_name: `kartavyas`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/logo_new_color.png`, // This path is relative to the root of the site.
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
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: `${process.env.GA_TRACKING_ID}`,
            },
        }
    ],
}

module.exports = config;
