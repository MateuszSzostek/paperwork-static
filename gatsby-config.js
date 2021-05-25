require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: "Static Website Starter",
        description: `Typescript + Tailwind CSS + Styled-Components + starter to kickoff your project.`,
        author: `Mateusz Szostek`,
        keywords: `gatsby, template`,
        siteUrl: `https://awesome-static-gatsby-template.netlify.app/`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [process.env.GATSBY_GOOGLE_TRACKING_ID],
                pluginConfig: {
                    head: true,
                },
            },
        },
        `gatsby-plugin-gatsby-cloud`,
        `gatsby-plugin-offline`,
        "gatsby-plugin-postcss",
        "gatsby-plugin-styled-components",
        "gatsby-plugin-typescript",
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",

        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        "gatsby-plugin-mdx",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "data",
                path: `${__dirname}/src/`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                commonmark: true,
                footnotes: true,
                pedantic: true,
                gfm: true,
                plugins: [
                    // gatsby-remark-relative-images must go before gatsby-remark-images
                    {
                        resolve: `gatsby-remark-relative-images`,
                        options: {
                            // [Optional] The root of "media_folder" in your config.yml
                            // Defaults to "static"
                            staticFolderName: "static",
                            // [Optional] Include the following fields, use dot notation for nested fields
                            // All fields are included by default
                            include: ["featured"],
                            // [Optional] Exclude the following fields, use dot notation for nested fields
                            // No fields are excluded by default
                            exclude: ["featured.skip"],
                        },
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            linkImagesToOriginal: false,
                            wrapperStyle: "max-width: 100vw;",
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-intl`,
            options: {
                // language JSON resource path
                path: `${__dirname}/src/locales`,
                // supported language
                languages: [`en`, `pl`, `ar`],
                // language file path
                defaultLanguage: `en`,
                // option to redirect to `/ko` when connecting `/`
                redirect: true,
            },
        },

        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
                // Learn about environment variables: https://gatsby.dev/env-vars
                accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
            },
        },
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                printRejected: true, // Print removed selectors and processed file names
                develop: true, // Enable while using `gatsby develop`
                tailwind: true, // Enable tailwindcss support
                // whitelist: ['whitelist'], // Don't remove this selector
                ignore: [
                    "/customStyles.css",
                    "prismjs/",
                    "docsearch.js/",
                    "global.css",
                ], // Ignore files/folders
                // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
            },
        },
    ],
};
