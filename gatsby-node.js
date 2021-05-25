const path = require("path");
const { paginate } = require("gatsby-awesome-pagination");

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const articleTemplate = path.resolve("./src/templates/md_post.tsx");

    const contentfulTemplate = path.resolve(
        "./src/templates/contentful_post.tsx"
    );

    //const contentfulTemplate = path.resolve('./src/templates/md_post.tsx');

    const cont = await graphql(`
        query MyQuery {
            allContentfulBlogPost(filter: { node_locale: { eq: "en-US" } }) {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);
    const res = await graphql(`
        query MyQuery {
            allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/(data)/(md_posts)/" } }
            ) {
                edges {
                    node {
                        frontmatter {
                            slug
                        }
                    }
                }
            }
        }
    `);
    const resPost = await graphql(`
        query MyQuery {
            allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/(data)/(md_posts)/" } }
            ) {
                edges {
                    node {
                        html
                        frontmatter {
                            date
                            title
                            slug
                            tags
                            shortDesc
                            id
                            postImage {
                                name
                                extension
                            }
                        }
                    }
                }
            }
        }
    `);

    paginate({
        createPage,
        items: cont.data.allContentfulBlogPost.edges,
        itemsPerPage: 500,
        pathPrefix: "/blog",
        component: path.resolve(`./src/templates/contentful_post_list.tsx`),
    });

    cont.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: contentfulTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug,
            },
        });
    });
};
