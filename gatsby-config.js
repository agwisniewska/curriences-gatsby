/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: 'gatsby-plugin-typography',
      options: {
          pathToConfigModule: 'src/utils/typography'
      }
    },
    "gatsby-plugin-typescript",
    "gatsby-plugin-tslint",
  ],
}
