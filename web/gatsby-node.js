const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(`
        query componentsPageQuery {
            allSanityPage {
                edges {
                    node {
                        metaDescription
                        title
                        slug {
                            current
                        }
                        pageId
                    }
                }
            }
        }
    `)
    result.data.allSanityPage.edges.forEach(({ node }) => {
        createPage({
            path: node.slug.current,
            component: path.resolve(`./src/templates/index.js`),
            context: {
                pageId: node.pageId
            }
        })
    })
  }

