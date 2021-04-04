const path = require("path");

 exports.onCreateNode = ({ node, actions}) => {
    const { createNodeField } = actions;

    if(node.internal.type === `MarkdownRemark`) {
        const slug = path.basename(node.fileAbsolutePath, ".md");
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        });
    }
 };