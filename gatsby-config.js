module.exports = {
  siteMetadata: {
    siteUrl: 'https://401k.glitch.me/',
    title: 'CS1 Blog',
    image: 'https://401k.glitch.me/cs1-game-engine/',
    description: 'CS1 Blog',
    blogTitle: 'I Have to Write This Down',
    blogDescription: 'A blog about the CS1 Game Engine.',
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
