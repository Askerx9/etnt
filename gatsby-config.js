module.exports = {
  siteMetadata: {
    title: `ETNT entreprise`,
    description: `ETNT est un bureau d’études spécialisée dans le domaine d'ingénieries télécoms de la fibre optique FTTH`,
    author: `@predicat`,
    menuLinks: [
      {
        name: "Notre histoire",
        link: "#presentation",
      },
      {
        name: "Services",
        link: "#services",
      },
      {
        name: "Competences",
        link: "#skills",
      },
      {
        name: "Chiffres",
        link: "#digit",
      },
      {
        name: "Contact",
        link: "#contact",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        useResolveUrlLoader: {
          options: {
            sourceMap: true, //default is false
          },
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
