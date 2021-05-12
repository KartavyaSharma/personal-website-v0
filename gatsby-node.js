const { createFilePath } = require(`gatsby-source-filesystem`);
const { isExportDeclaration } = require("typescript");
const projectJson = require('./src/data/projects/projectData.json');

exports.onCreateNode = ({ node, getNode, actions}) => {
    const { createNodeField } = actions;

    if(node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `src/content/posts/`, trailingSlash: false});
        createNodeField({
            node,
            name: `slug`,
            value: `/content${slug.replace(/\./gi, ' ').split(' ').join('-')}`,
        });
    }
};

module.exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    const blogTemplate = require.resolve(`./src/templates/BlogPost.js`)
    const projectTemplate = require.resolve(`./src/templates/ProjectPage.js`)
    
    const response = await graphql(`
        query MyQuery {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `
    )

    if (response.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    projectJson.forEach(project => {
        var path = `project/${project.name.replace(' -','').split(' ').join('-').toLowerCase()}`;
        createPage({
            path: path,
            component: projectTemplate,
            context: {
                name: project.name,
            }
        });
    });

    const posts = response.data.allMarkdownRemark.edges;
    const postsPerPage = 5;
    const numPages = Math.ceil(posts.length / postsPerPage);
    
    Array.from({ length: numPages }).forEach((_,i) => {
        createPage({
            path: i === 0 ? `/blog` : `/blog/${i+1}`,
            component: require.resolve("./src/templates/BlogPagination.js"),
            context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages,
                currentPage: i+1,
            },
        })
    })

    response.data.allMarkdownRemark.edges.forEach(edge => {
        createPage({
            component: blogTemplate,
            path: edge.node.fields.slug,
            context: {
                slug: edge.node.fields.slug,
            },
        })
    });
}


