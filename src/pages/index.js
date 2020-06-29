import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Box, Button, Heading, Text, Image, useColorMode } from "@chakra-ui/core";
import { Helmet } from "react-helmet";

export default function IndexPage({ data }) {
  const { toggleColorMode } = useColorMode();
  return (
    <Layout>
      <Helmet>
        <meta name='description' content='Creating masterful 3D multiplayer games!'></meta>
        <meta property='og:title' content="CS1 Blog"/>
        <meta property='og:image' content="https://cdn.glitch.com/a0dd9fe7-3870-4571-800d-38e4a02ec0d8%2FCS1%20Banner%20with%20Background_flip.png?v=1593460056003"/>
        <meta property="og:description" content="Creating masterful 3D multiplayer games!"/>
        <meta property="og:url" content="//cs1.netlify.app" />
        <meta property="twitter:site" content="@CS1_Game_Engine" />
        <meta property="twitter:title" content="CS1 Game Engine Blog" />
        <meta property="twitter:description" content="The CS1 Game Engine enables easy design of 3D multiplayer VR-ready games which can be installed as Progressive Web Applications (PWAs)." />
        <meta property="twitter:image" content="https://cdn.glitch.com/a0dd9fe7-3870-4571-800d-38e4a02ec0d8%2FCS1%20Banner%20with%20Background_flip.png?v=1593460056003" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Box>
        <Image src="https://cdn.glitch.com/53f6eb06-66f0-4243-b635-db0bfec50c28%2FCS1_Banner.png?v=1589051460395"/>
        <Heading>CS1 Blog</Heading>
        <hr></hr>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Box  maxW="sm" key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <Heading as="h6" size="xs">
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #555;
                  `}
                >
                  — {node.frontmatter.date}
                </span>
              </Heading>
              <div>{node.excerpt}</div>
            </Link>
          </Box>
        ))}
        
    
        
      </Box>
      
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`