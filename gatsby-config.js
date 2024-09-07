const siteMetadata = {
  title: `TechnoBureau`,
  description: `Your Gateway to Tech Excellence`,
};
module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-postcss',
    'tailwindcss',
    'autoprefixer',
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
  ],
};