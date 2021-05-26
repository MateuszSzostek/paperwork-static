import React from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import { useIntl } from "gatsby-plugin-react-intl";
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
                        arabicName
                        description
                        arabicDescription
                        photo {
                            gatsbyImageData
                            title
                        }
                        role
                        arabicRole
                    }
                }
            }
            allContentfulProject {
                edges {
                    node {
                        title
                        arabicTitle
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
                arabicDescription {
                    arabicDescription
                }
            }
        }
    `);
    const intl = useIntl();
    /*
    const landingImage = data.contentfulLandingImage.picture.gatsbyImageData;
    const landingAlt = data.contentfulLandingImage.altAttribute;
    <GatsbyImage
        style={{ width: "100%", height: "90vh" }}
        alt={landingAlt}
        image={landingImage}
    />;
    */
    const projects = data.allContentfulProject.edges.map((s, idx) => (
        <div key={idx} className="w3-col l3 m6 w3-margin-bottom">
            <div
                style={
                    intl.locale == "ar"
                        ? {
                              display: "flex",
                              justifyContent: "flex-end",
                          }
                        : {}
                }
                className="w3-display-container"
            >
                <div
                    style={{ zIndex: 100 }}
                    className="w3-display-topleft w3-black w3-padding"
                >
                    {intl.locale == "ar" ? s.node.arabicTitle : s.node.title}
                </div>

                <GatsbyImage
                    style={{ width: "100%", height: "260px" }}
                    alt={"Sample Work"}
                    image={s.node.picture.gatsbyImageData}
                />
            </div>
        </div>
    ));
    const members = data.allContentfulMember.edges.map((s, idx) => (
        <div key={idx} className="w3-col l3 m6 w3-margin-bottom">
            <GatsbyImage
                style={{ width: "100%", height: "260px" }}
                alt={"Sample Work"}
                image={s.node.photo.gatsbyImageData}
            />
            <h3 dir={intl.locale == "ar" ? "rtl" : ""}>
                {intl.locale == "ar" ? s.node.arabicName : s.node.name}
            </h3>
            <p dir={intl.locale == "ar" ? "rtl" : ""} className="w3-opacity">
                {intl.locale == "ar" ? s.node.arabicRole : s.node.role}
            </p>
            <p dir={intl.locale == "ar" ? "rtl" : ""}>
                {intl.locale == "ar"
                    ? s.node.arabicDescription
                    : s.node.description}
            </p>
            <p>
                <button className="w3-button w3-light-grey w3-block">
                    {intl.formatMessage({ id: "sendMessage" })}
                </button>
            </p>
        </div>
    ));

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
                    {" "}
                </header>

                <div
                    className="w3-content w3-padding"
                    style={{ maxWidth: "1564px" }}
                >
                    <div className="w3-container w3-padding-32" id="projects">
                        <h3
                            dir={intl.locale == "ar" ? "rtl" : ""}
                            className="w3-border-bottom w3-border-light-grey w3-padding-16"
                        >
                            {intl.formatMessage({ id: "projects" })}
                        </h3>
                    </div>

                    <div className="w3-row-padding">{projects}</div>

                    <div className="w3-container w3-padding-32" id="about">
                        <h3
                            dir={intl.locale == "ar" ? "rtl" : ""}
                            className="w3-border-bottom w3-border-light-grey w3-padding-16"
                        >
                            {intl.formatMessage({ id: "about" })}
                        </h3>
                        <p dir={intl.locale == "ar" ? "rtl" : ""}>
                            {intl.locale == "ar"
                                ? data.contentfulAbout.arabicDescription
                                      .arabicDescription
                                : data.contentfulAbout.description.description}
                        </p>
                    </div>

                    <div className="w3-row-padding w3-grayscale">{members}</div>

                    <div className="w3-container w3-padding-32" id="contact">
                        <h3
                            dir={intl.locale == "ar" ? "rtl" : ""}
                            className="w3-border-bottom w3-border-light-grey w3-padding-16"
                        >
                            {intl.formatMessage({ id: "contact" })}
                        </h3>
                        <p dir={intl.locale == "ar" ? "rtl" : ""}>
                            {intl.formatMessage({ id: "contactInfo" })}
                        </p>
                        <form action="/action_page.php" target="_blank">
                            <input
                                dir={intl.locale == "ar" ? "rtl" : ""}
                                className="w3-input w3-border"
                                type="text"
                                placeholder={intl.formatMessage({
                                    id: "name",
                                })}
                                required
                                name="Name"
                            />
                            <input
                                dir={intl.locale == "ar" ? "rtl" : ""}
                                className="w3-input w3-section w3-border"
                                type="text"
                                placeholder={intl.formatMessage({
                                    id: "email",
                                })}
                                required
                                name="Email"
                            />
                            <input
                                dir={intl.locale == "ar" ? "rtl" : ""}
                                className="w3-input w3-section w3-border"
                                type="text"
                                placeholder={intl.formatMessage({
                                    id: "subject",
                                })}
                                required
                                name="Subject"
                            />
                            <input
                                dir={intl.locale == "ar" ? "rtl" : ""}
                                className="w3-input w3-section w3-border"
                                type="text"
                                placeholder={intl.formatMessage({
                                    id: "comment",
                                })}
                                required
                                name="Comment"
                            />
                            <div dir={intl.locale == "ar" ? "rtl" : ""}>
                                <button
                                    className="w3-button w3-black w3-section"
                                    type="submit"
                                >
                                    <i className="fa fa-paper-plane"></i>{" "}
                                    {intl.formatMessage({
                                        id: "sendMessage",
                                    })}
                                </button>
                            </div>
                        </form>
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
