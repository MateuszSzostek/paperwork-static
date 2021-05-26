import React from "react";
import { useIntl, Link } from "gatsby-plugin-react-intl";
import { GatsbyImage } from "gatsby-plugin-image";

interface Props {
    image: any;
    tags: string;
    title: string;
    desc: string;
    date: string;
    slug: string;
    author: string;
    arabicAuthor: string;
    arabicTitle: string;
    arabicDesc: string;
}

const PostCard: React.FC<Props> = ({
    title,
    desc,
    date,
    slug,
    image,
    author,
    arabicAuthor,
    arabicTitle,
    arabicDesc,
}) => {
    const intl = useIntl();
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
                <div
                    dir={intl.locale == "ar" ? "rtl" : ""}
                    className="post-title"
                >
                    {intl.locale == "ar" ? arabicTitle : title}
                </div>

                <p
                    style={{ margin: "3px 0px 3px 0px" }}
                    dir={intl.locale == "ar" ? "rtl" : ""}
                    className="post-author"
                >
                    {intl.locale == "ar" ? arabicAuthor : author}
                </p>
                <p dir={intl.locale == "ar" ? "rtl" : ""} className="post-date">
                    {date}
                </p>

                <div className="description">
                    <p
                        dir={intl.locale == "ar" ? "rtl" : ""}
                        className="post-desc"
                    >
                        {intl.locale == "ar" ? arabicDesc : desc}
                    </p>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Link className="post-slug" to={slug}>
                        {intl.formatMessage({ id: "read" })}
                    </Link>
                </div>
            </div>
        </>
    );
};

export default PostCard;
