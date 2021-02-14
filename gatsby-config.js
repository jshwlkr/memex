module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/content/garden`,
        rootNote: `/memex`,
      },
    },
  ],
  siteMetadata: {
    title: `Memex`,
    description: `An experiment in digital gardening.`,
  },
}
