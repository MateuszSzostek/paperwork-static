import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { useIntl, Link, changeLocale } from "gatsby-plugin-react-intl";
import "../styles/w3styles.css";

export default function Layout({ children }) {
    const intl = useIntl();

    /*
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
    */

    const navLinksData = [
        { id: 1, name: intl.formatMessage({ id: "home" }), slug: "/Home" },
        {
            id: 2,
            name: intl.formatMessage({ id: "blog" }),
            slug: "/blog",
        },
    ];

    const navLinks = navLinksData.map((s) => (
        <Link
            style={{ marginLeft: "10px", marginRight: "10px" }}
            key={s.id}
            to={s.slug}
            className="mx-2 text-sm my-1"
        >
            {s.name}
        </Link>
    ));

    return (
        <div className="navigation">
            <div className="w3-top links-container">
                <div className="w3-bar w3-white w3-wide w3-padding w3-card">
                    <a
                        href="#home"
                        className="w3-bar-item w3-button w3-hide-small"
                    >
                        <b>ES</b> Example Site
                    </a>
                    <div className="w3-right">
                        {navLinks}
                        <GatsbyLink
                            style={{ marginLeft: "3px", marginRight: "3px" }}
                            className="w3-right"
                            to="/en"
                        >
                            EN
                        </GatsbyLink>
                        {"/"}
                        <GatsbyLink
                            style={{ marginLeft: "3px", marginRight: "3px" }}
                            className="w3-right"
                            to="/ar"
                        >
                            AR
                        </GatsbyLink>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center z-10 relative">
                {children}
            </div>
        </div>
    );
}
