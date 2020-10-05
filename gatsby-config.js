/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config()
module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-optional-chaining`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-dev",
      options: {
        username: "fkrasnowski",
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        url: "https://api.github.com/graphql",
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      },
    },
  ],
}
