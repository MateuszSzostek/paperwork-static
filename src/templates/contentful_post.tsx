import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import { BLOCKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { GatsbyImage } from "gatsby-plugin-image";
import { useIntl } from "gatsby-plugin-react-intl";

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
            date(formatString: "MMMM Do, YYYY")
            slug
            title
            arabicTitle
            description
            arabicDescription
            keywords
            keywordsArabic
            author
            arabicAuthor
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
            arabicPost {
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
    if (typeof props.data !== "undefined") {
        const post = props.data.contentfulBlogPost.post;
        const arabicPost = props.data.contentfulBlogPost.arabicPost;
        if (
            props.data.contentfulBlogPost.post === null ||
            props.data.contentfulBlogPost.arabicPost === null
        ) {
            return (
                <>
                    <p style={{ fontSize: "48" }}>
                        The post is empty, please complete it on the contentful
                        platform.
                    </p>
                </>
            );
        }
        if (
            props.data.contentfulBlogPost.title === null ||
            props.data.contentfulBlogPost.arabictitle === null
        ) {
            return (
                <>
                    <p style={{ fontSize: "48" }}>
                        The title is empty, please add it in contentful
                        platform.
                    </p>
                </>
            );
        }
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
        const arabicOutput = renderRichText(arabicPost, options);
        const intl = useIntl();
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
                        <h2
                            dir={intl.locale == "ar" ? "rtl" : ""}
                            className="post-list-title font-semibold"
                        >
                            {intl.locale == "ar"
                                ? props.data.contentfulBlogPost.arabicTitle
                                : props.data.contentfulBlogPost.title}
                        </h2>

                        {props.data.contentfulBlogPost.picture == null ? (
                            <div
                                style={{
                                    width: "100%",
                                    height: "320px",
                                    border: "1px solid black",
                                }}
                            ></div>
                        ) : (
                            <GatsbyImage
                                className="post-list-image"
                                alt="Contentful post image"
                                style={{ width: "100%", height: "600px" }}
                                image={
                                    props.data.contentfulBlogPost.picture
                                        .gatsbyImageData
                                }
                            />
                        )}

                        <p
                            dir={intl.locale == "ar" ? "rtl" : ""}
                            className="post-author"
                        >
                            {intl.locale == "ar"
                                ? props.data.contentfulBlogPost.arabicAuthor
                                : props.data.contentfulBlogPost.author}
                        </p>
                        <p
                            dir={intl.locale == "ar" ? "rtl" : ""}
                            className="post-date"
                        >
                            {" "}
                            {props.data.contentfulBlogPost.date}
                        </p>
                        <div
                            dir={intl.locale == "ar" ? "rtl" : ""}
                            className="rounded-md bg-white bg-opacity-30"
                        >
                            {intl.locale == "ar" ? arabicOutput : output}
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
    return (
        <>
            <p style={{ fontSize: "48" }}>
                Contentful content was loaded incorrectly. The form is probably
                empty.
            </p>
        </>
    );
};

export default contentful_post;
