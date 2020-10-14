require('dotenv').config({
  path: '.env'
});
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'v1bojt31',
        dataset: 'production',
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
