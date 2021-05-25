import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import PostCard from "../components/PostCard";
import Pager from "../components/Pager";
import tw from "twin.macro";

export const query = graphql`
    query {
        allContentfulBlogPost(filter: { node_locale: { eq: "en-US" } }) {
            edges {
                node {
                    id
                    date(formatString: "MMMM Do, YYYY")
                    slug
                    title
                    description
                    author
                    picture {
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
            }
        }
    }
`;
const BlogGrid = tw.div`
  grid md:grid-cols-12
`;
const contentful_post_list: React.FC = (props) => {
    const posts = props.data.allContentfulBlogPost.edges;
    return (
        <Layout>
            <Head
                title="Blog pages from MD files!"
                description="This pages has beed created by using markdown files"
                keywords="gatsby, template, site, static, blog, markdown"
                author="Mateusz Szostek"
            />
            <div className="blog-list-container ">
                <h2 className="font-semibold my-1 text-center post-list-title">
                    Blog
                </h2>

                <div className="sm:col-span-12 md:col-span-12 lg:col-span-8">
                    {posts.map((s) => (
                        <PostCard
                            key={s.node.id}
                            image={s.node.picture.gatsbyImageData}
                            slug={"/blog/" + s.node.slug}
                            tags={s.node.tags}
                            title={s.node.title}
                            desc={s.node.description}
                            date={s.node.date}
                            author={s.node.author}
                        />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default contentful_post_list;
