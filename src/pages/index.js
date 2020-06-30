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
        <meta property="og:type" content="website"/>
        <meta name='description' content='Creating masterful 3D multiplayer games!'></meta>
        <meta property='og:title' content="CS1 Blog"/>
        <meta property='og:image' content="https://res.cloudinary.com/cs1/image/upload/v1593487791/CS1_Banner_wcbotc.png"/>
        <meta property="og:description" content="Creating masterful 3D multiplayer games!"/>
        <meta property="og:url" content="https://cs1.netlify.app" />
        <meta name="twitter:site" content="@CS1_Game_Engine" />
        <meta name="twitter:title" content="CS1 Game Engine Blog" />
        <meta name="twitter:description" content="The CS1 Game Engine enables easy design of 3D multiplayer VR-ready games which can be installed as Progressive Web Applications (PWAs)." />
        <meta name="twitter:image" content="https://res.cloudinary.com/cs1/image/upload/v1593487734/CS1_Banner_with_Background_flip_ybnnwx.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Box>
        <Image src="https://res.cloudinary.com/cs1/image/upload/v1593487791/CS1_Banner_wcbotc.png"/>
        <Heading>CS1 Blog</Heading>
        <hr></hr>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Box  
            px={"5vw"}
            pb={"5vh"}
            key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <br></br>
              <Heading as="h6" size="sm">
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #555;
                  `}
                >
                 <br></br> 
                  — {node.frontmatter.date}
                </span>
              </Heading>
              <Box
                px={"3vw"}
                width={[
                    "90%", // base
                    "90%", // 480px upwards
                    "90%", // 768px upwards
                    "90%", // 992px upwards
                 ]}
                >{node.excerpt}</Box>
              <br></br>
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