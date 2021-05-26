import React from "react";
import { Link } from "gatsby-plugin-react-intl";
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
                    <p dir="rtl" className="post-desc">
                        {desc}
                    </p>
                </div>
                <Link className="post-slug" to={slug}>
                    Read
                </Link>
            </div>
        </>
    );
};

export default PostCard;
