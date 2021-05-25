import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby-plugin-intl";
import tw from "twin.macro";
import { GatsbyImage } from "gatsby-plugin-image";

interface Props {
    image: any;
    tags: string;
    title: string;
    desc: string;
    date: string;
    slug: string;
    author: string;
}
const CardWrapper = tw.div`bg-white bg-opacity-30 my-5 p-4 rounded-md md:(flex flex-row) z-0`;
const Row = tw.div`
  md:(flex flex-row)`;
const Col = tw.div`
  flex flex-col relative`;
const Date = tw.p`
  uppercase mr-3 font-semibold`;
const Tags = tw.p`
  uppercase text-purple-500 font-semibold`;
const PostTitle = tw.h3`
  text-xl font-bold my-2`;
const ReadMore = tw(Link)`
  text-blue-800 absolute -bottom-1`;

const PostCard: React.FC<Props> = ({
    title,
    desc,
    date,
    slug,
    image,
    author,
}) => {
    return (
        <>
            <div className="card-wrapper mx-10px">
                <div>
                    <GatsbyImage
                        image={image}
                        alt="Blog post image"
                        className="post-list-image"
                    />
                </div>
                <div className="post-title">{title}</div>
                <div className="post-info">
                    <span className="post-author">{author}</span>
                    <span className="post-date">{date}</span>
                </div>
                <div className="description">
                    <p className="post-desc">{desc}</p>
                </div>
                <Link className="post-slug" to={slug}>
                    Read
                </Link>
            </div>
        </>
    );
};

export default PostCard;
