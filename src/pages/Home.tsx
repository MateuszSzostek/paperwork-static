import React from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import tw from "twin.macro";
import { useIntl } from "gatsby-plugin-intl";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Home: React.FC = ({}) => {
    const data = useStaticQuery(graphql`
        query portfolioQuery {
            contentfulLandingImage {
                altAttribute
                picture {
                    gatsbyImageData(quality: 100)
                }
            }
            allContentfulMember {
                edges {
                    node {
                        name
                        description
                        photo {
                            gatsbyImageData
                            title
                        }
                        role
                    }
                }
            }
            allContentfulProject {
                edges {
                    node {
                        title
                        picture {
                            gatsbyImageData
                        }
                    }
                }
            }
            contentfulAbout {
                description {
                    description
                }
            }
        }
    `);
    const landingImage = data.contentfulLandingImage.picture.gatsbyImageData;
    const landingAlt = data.contentfulLandingImage.altAttribute;
    const projects = data.allContentfulProject.edges.map((s) => (
        <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
                <div
                    style={{ zIndex: 100 }}
                    className="w3-display-topleft w3-black w3-padding"
                >
                    {s.node.title}
                </div>
                <GatsbyImage
                    style={{ width: "100%", height: "260px" }}
                    key={s.node.id}
                    alt={"Sample Work"}
                    image={s.node.picture.gatsbyImageData}
                />
            </div>
        </div>
    ));
    const members = data.allContentfulMember.edges.map((s) => (
        <div className="w3-col l3 m6 w3-margin-bottom">
            <GatsbyImage
                style={{ width: "100%", height: "260px" }}
                key={s.node.id}
                alt={"Sample Work"}
                image={s.node.photo.gatsbyImageData}
            />
            <h3>{s.node.name}</h3>
            <p className="w3-opacity">{s.node.role}</p>
            <p>{s.node.description}</p>
            <p>
                <button className="w3-button w3-light-grey w3-block">
                    Contact
                </button>
            </p>
        </div>
    ));
    const intl = useIntl();
    return (
        <Layout>
            <Head
                title="Gatsby + Typescript + Tailwind CSS + Styled-Components"
                description="This awesome gatsby starter template!"
                keywords="gatsby, template, static, site, website "
                author="Mateusz Szostek"
            />
            <div className="container py-3 ">
                <header
                    className="w3-display-container w3-content w3-wide"
                    style={{ maxWidth: "1500px" }}
                    id="home"
                >
                    <GatsbyImage
                        style={{ width: "100%", height: "90vh" }}
                        alt={landingAlt}
                        image={landingImage}
                    />
                    <div className="w3-display-middle w3-margin-top w3-center">
                        <h1 className="w3-xxlarge w3-text-white">
                            <span className="w3-padding w3-black w3-opacity-min">
                                <b>BR</b>
                            </span>
                            <span className="w3-hide-small w3-text-light-grey w3-black w3-opacity-min">
                                Architects
                            </span>
                        </h1>
                    </div>
                </header>

                <div
                    className="w3-content w3-padding"
                    style={{ maxWidth: "1564px" }}
                >
                    <div className="w3-container w3-padding-32" id="projects">
                        <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
                            Projects
                        </h3>
                    </div>

                    <div className="w3-row-padding">{projects}</div>

                    <div className="w3-container w3-padding-32" id="about">
                        <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
                            About
                        </h3>
                        <p>{data.contentfulAbout.description.description}</p>
                    </div>

                    <div className="w3-row-padding w3-grayscale">{members}</div>

                    <div className="w3-container w3-padding-32" id="contact">
                        <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
                            Contact
                        </h3>
                        <p>
                            Lets get in touch and talk about your next project.
                        </p>
                        <form action="/action_page.php" target="_blank">
                            <input
                                className="w3-input w3-border"
                                type="text"
                                placeholder="Name"
                                required
                                name="Name"
                            />
                            <input
                                className="w3-input w3-section w3-border"
                                type="text"
                                placeholder="Email"
                                required
                                name="Email"
                            />
                            <input
                                className="w3-input w3-section w3-border"
                                type="text"
                                placeholder="Subject"
                                required
                                name="Subject"
                            />
                            <input
                                className="w3-input w3-section w3-border"
                                type="text"
                                placeholder="Comment"
                                required
                                name="Comment"
                            />
                            <button
                                className="w3-button w3-black w3-section"
                                type="submit"
                            >
                                <i className="fa fa-paper-plane"></i> SEND
                                MESSAGE
                            </button>
                        </form>
                    </div>
                    <div className="w3-container">
                        <img
                            src="/w3images/map.jpg"
                            className="w3-image"
                            style={{ width: "100%" }}
                        />
                    </div>
                </div>

                <footer className="w3-center w3-black w3-padding-16">
                    <p></p>
                </footer>
            </div>
        </Layout>
    );
};
export default Home;
