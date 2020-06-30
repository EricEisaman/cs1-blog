module.exports = {
  siteMetadata: {
    siteUrl: 'https://cs1.netlify.app/',
    title: 'CS1 Blog',
    image: 'https://res.cloudinary.com/cs1/image/upload/v1593487791/CS1_Banner_wcbotc.png',
    description: 'CS1 Blog',
    blogTitle: 'CS1 Game Engine',
    blogDescription: 'Developing and deploying 3D Multiplayer VR-ready games with the CS1 Game Engine.',
    author: 'SirFizX',
    social: {
      twitter: 'CS1_Game_Engine',
      github: 'EricEisaman'
    }
  },
  plugins: [
    {
      resolve: "gatsby-plugin-chakra-ui",
      options: {
        isResettingCSS: true, // optional, default to true
        isUsingColorMode: true // optional, default to true
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/blog`,
        name: "blog",
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `CS1 Blog`,
                short_name: `CS1 Blog`,
                start_url: `/`,
                background_color: `#5EC0F2`,
                theme_color: `#763137`,
                display: `fullscreen`,
                icon: `src/images/icon.png`, // This path is relative to the root of the site.
            },
    },
    'gatsby-plugin-offline',
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-excerpts",
      options: {
        sources: {
          snippetBlocks: {
            type: "htmlQuery",
            sourceField: "html",
            excerptSelector: ".custom-block.snippet .custom-block-body",
            stripSelector: "a",
            elementReplacements: [
              {
                selector: "h6",
                replaceWith: "h5"
              },
              {
                selector: "h5",
                replaceWith: "h6"
              },
              {
                selector: "h4",
                replaceWith: "h5"
              },
              {
                selector: "h3",
                replaceWith: "h4"
              },
              {
                selector: "h2",
                replaceWith: "h3"
              }
            ]
          },
          default: {
            type: "htmlQuery",
            sourceField: "html",
            excerptSelector: "html > *",
            ignoreSelector: "img, .gatsby-highlight",
            stripSelector: "a",
            elementReplacements: [
              {
                selector: "h6",
                replaceWith: "h5"
              },
              {
                selector: "h5",
                replaceWith: "h6"
              },
              {
                selector: "h4",
                replaceWith: "h5"
              },
              {
                selector: "h3",
                replaceWith: "h4"
              },
              {
                selector: "h2",
                replaceWith: "h3"
              }
            ],
            truncate: {
              length: 80,
              byWords: true,
              ellipsis: "…"
            }
          }
        },
        sourceSets: {
          markdownHtml: ["snippetBlocks", "default"]
        },
        excerpts: {
          snippet: {
            type: "html",
            nodeTypeSourceSet: {
              MarkdownRemark: "markdownHtml"
            }  
          }
        }
      }
    }
  ]
}
