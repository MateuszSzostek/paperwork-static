import React, { useState } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { ThemeProvider } from "styled-components";
import * as Theme from "./../theme/theme";
import GlobalStyles from "./../theme/globalStyles";
import { useSelector } from "react-redux";
import { uiSelector } from "../state/ui";
import { Link as GatsbyLink } from "gatsby";
import { useIntl, Link } from "gatsby-plugin-intl";
import "../styles/w3styles.css";
import { LogoIcon, MenuIcon } from "../components/icons/index";
import SimpleReactLightbox from "simple-react-lightbox";

import { H1, H3 } from "./typography";

const TopWrapper = tw.div`
flex flex-col container px-3 lg:p-3 bg-purple-200 flex-row  rounded-md z-50 
fixed lg:relative 
`;

const NavBar = tw.div`
  hidden flex-row lg:(flex) items-center h-full mx-5
`;

const Logo = tw(LogoIcon)`
w-16 h-16 mr-2
`;

export default function Layout({ children }) {
    console.log(process.env.GATSBY_CONTENTFUL_SPACE_ID);
    console.log(process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN);
    const intl = useIntl();
    const { themeMode } = useSelector(uiSelector);

    let [menuOpen, setMenuOpen] = useState(false);

    function getWidth() {
        return Math.max(
            document.documentElement.clientWidth || 0,
            window.innerWidth || 0
        );
    }

    let handleClickMenuBtn = () => {
        if (getWidth() < 1200) {
            if (!menuOpen) {
                setMenuOpen(true);
            } else {
                setMenuOpen(false);
            }
        }
    };

    const navLinksData = [
        { id: 1, name: intl.formatMessage({ id: "home" }), slug: "/Home" },
        {
            id: 2,
            name: intl.formatMessage({ id: "blog" }),
            slug: "/blog",
        },
    ];

    const navLinks = navLinksData.map((s) => (
        <Link key={s.id} to={s.slug} className="mx-2 text-sm my-1">
            {s.name}
        </Link>
    ));

    return (
        <ThemeProvider theme={Theme[themeMode]}>
            <SimpleReactLightbox>
                <GlobalStyles />
                <div className="navigation">
                    <div className="w3-top links-container">
                        <div className="w3-bar w3-white w3-wide w3-padding w3-card">
                            <a href="#home" className="w3-bar-item w3-button">
                                <b>BR</b> Architects
                            </a>
                            <div className="w3-right w3-hide-small">
                                {navLinks}
                                <GatsbyLink
                                    className="w3-right w3-hide-small"
                                    to="/en"
                                >
                                    EN
                                </GatsbyLink>
                                /
                                <GatsbyLink
                                    className="w3-right w3-hide-small"
                                    to="/pl"
                                >
                                    PL
                                </GatsbyLink>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center z-10 relative">
                        <div className="flex flex-row items-center w-42 h-16">
                            <div className="mx-2">
                                <div className="sticky top-4 right-4 cursor-pointer block lg:hidden">
                                    <MenuIcon onClick={handleClickMenuBtn} />
                                </div>
                            </div>
                        </div>

                        <div
                            className={
                                "flex flex-col h-68 fixed bg-purple-200 container top-16 lg:invisible z-50 " +
                                (menuOpen ? " " : "block hidden invisible")
                            }
                        >
                            {navLinks}
                            <div className="ml-2">
                                <GatsbyLink to="/en">EN</GatsbyLink>/
                                <GatsbyLink to="/pl">PL</GatsbyLink>
                            </div>
                            <div className="ml-2">
                                <button className="font-semibold">
                                    {intl.formatMessage({ id: "dark" })}
                                </button>
                                /
                                <button className="font-semibold">
                                    {intl.formatMessage({ id: "light" })}
                                </button>
                            </div>
                        </div>
                        {children}
                    </div>
                </div>
            </SimpleReactLightbox>
        </ThemeProvider>
    );
}
