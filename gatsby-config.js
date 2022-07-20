module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://dera.netlify.app/`,
    // Your Name
    name: 'Dera Adugna',
    // Main Site Title
    title: `Dera Adugna | Full-Stack Developer`,
    // Description that goes under your name in main bio
    description: `Senior Full-Stack Developer at Ahun`,
    // Optional: Twitter account handle
    author: `@5ilc0_`,
    // Optional: Github account URL
    github: `https://github.com/Dru-Go`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/dera-adugna`,
    // Content of the About Me section
    about: `
    Few words that describe who i am: \n
    Disciplined, Persistent, Intelligent, Witty, Motivated, Attentive and Hard-working  
    `,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Sneak Peek',
        description:
          'A simple cheat-sheet for the most useful guides  on the internet',
        link: 'https://github.com/Dru-Go/sneak-peak',
      },
      {
        name: 'Tereka',
        description:
          'An audio book built with React Apollo and Tailwind (Typescript Client) AND Nodejs and Express-Graphql (Server)',
        link: 'https://github.com/Dru-Go/Tereka',
      },
      {
        name: 'Feedme',
        description:
          'A simple feed that uses firebase auth and GCP to upload images',
        link: 'https://github.com/Dru-Go/feedme',
      }
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Ahun App (Prime Marven Engineering)',
        description: 'Full-Stack Developer, January 2021 - Present',
        link: 'https://ahun.app',
      },
      {
        name: 'Codenight',
        description: 'Community Event Founder and Coordinator',
        link: 'https://t.me/CodeNight',
      },
      {
        name: 'Addis Software',
        description: 'Backend Developer October 2020 - December 2020',
        link: 'https://addissoftware.com/',
      },
      {
        name: 'Deebii Technologies',
        description: 'Frontend Developer, December 2019 - February 2020',
        link: 'https://www.facebook.com/deebiitechnologies/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Node.js, Express.js ,React, Golang',
      },
      {
        name: 'Databases',
        description: 'MongoDB, Redis and Elastic Cache, Postgres',
      },
      {
        name: 'Other',
        description:
          'Payment Gateway (CBE, Telebirr, ...), Docker, Amazon Web Services (AWS), CI / CD, Microservices, Message brokers (Rabbitmq and Kafka), API design, Agile / Scrum',
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
