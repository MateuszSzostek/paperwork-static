import React from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import Masonry from "react-masonry-css";
import { SRLWrapper } from "simple-react-lightbox";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Galleries: React.FC = ({}) => {
    const data = useStaticQuery(graphql`
        query portfolioqwerQuery {
            allFile(
                filter: { absolutePath: { regex: "/data/md_posts/images/" } }
            ) {
                edges {
                    node {
                        id
                        childImageSharp {
                            gatsbyImageData(layout: FULL_WIDTH)
                        }
                    }
                }
            }
        }
    `);

    const breakpointColumnsObj = {
        default: 4,
        1300: 3,
    };

    const images = data.allFile.edges.map((s) => (
        <GatsbyImage
            key={s.node.id}
            alt={"Sample Work"}
            image={s.node.childImageSharp.gatsbyImageData}
        />
    ));

    return (
        <Layout>
            <Head
                title="Galleries Examples"
                description="Awesome galleries examples!"
                keywords="gatsby, template, static, site, website, galleries "
                author="Mateusz Szostek"
            />
            <p>This is awesome gatsby GALLERIES page!</p>
            <div className="w-100prec flex col align-center">
                <div className="portfolio-container flex col justify-center">
                    <SRLWrapper>
                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column"
                        >
                            {images}
                        </Masonry>
                    </SRLWrapper>
                </div>
            </div>
        </Layout>
    );
};

export default Galleries;
