/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const prism = require('@mapbox/rehype-prism')

// See https://github.com/mrfrontend-development/blog/commit/e9d625a44b73d6ee1e413ecb0188665e3d03faf8#diff-3863fe9c963d5c58d29a7f5af77e6480
module.exports = {
  pathPrefix: "/robinlinacre",
  siteMetadata: {
    title: "Robin Linacre",
  },
  plugins: [
    `gatsby-transformer-javascript-frontmatter`,
    `gatsby-transformer-json`,
    `gatsby-plugin-emotion`,
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins:
        [{
          resolve: `gatsby-remark-prismjs`,
          options: {}}
        ]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "javascript-pages",
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ]
}
