import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import Img from "gatsby-image";
import { BLOCKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage } from "gatsby-plugin-image";

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
            date(formatString: "MMMM Do, YYYY")
            slug
            title
            description
            keywords
            author
            picture {
                gatsbyImageData(layout: FULL_WIDTH)
            }
            post {
                raw
                references {
                    ... on ContentfulAsset {
                        __typename
                        contentful_id
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
            }
        }
    }
`;

const contentful_post: React.FC = (props) => {
    const post = props.data.contentfulBlogPost.post;
    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                return (
                    <GatsbyImage
                        alt="Contentful post image"
                        style={{ width: "100%", height: "600px" }}
                        image={node.data.target.gatsbyImageData}
                    />
                );
            },
        },
    };
    const output = renderRichText(post, options);
    return (
        <Layout>
            <Head
                title={props.data.contentfulBlogPost.title}
                description={props.data.contentfulBlogPost.description}
                keywords={props.data.contentfulBlogPost.keywords}
                author={props.data.contentfulBlogPost.author}
            />
            <div className="blog-list-container">
                <div className=" mx-10px">
                    <h2 className="post-list-title font-semibold">
                        {props.data.contentfulBlogPost.title}
                    </h2>
                    <GatsbyImage
                        className="post-list-image"
                        alt="Contentful post image"
                        style={{ width: "100%", height: "600px" }}
                        image={
                            props.data.contentfulBlogPost.picture
                                .gatsbyImageData
                        }
                    />
                    <span className="post-author">
                        {props.data.contentfulBlogPost.author}
                    </span>
                    <p className="post-date">
                        {" "}
                        {props.data.contentfulBlogPost.date}
                    </p>
                    <div className="rounded-md bg-white bg-opacity-30">
                        {output}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default contentful_post;
