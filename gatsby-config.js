require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Gatsby Contentful Starter",
    description: "Official Contentful Gatsby Starter",
  },
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        // Host entfernen oder explizit setzen
        host: process.env.CONTENTFUL_HOST || "cdn.contentful.com",
        // Environment explizit setzen
        environment: "master",
      },
    },
    // Markdown-Transformer für Contentful hinzufügen
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images-contentful",
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    // Netlify Plugin am Ende hinzufügen
    "gatsby-plugin-netlify",
  ],
};
