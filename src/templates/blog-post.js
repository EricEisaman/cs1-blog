import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import {
  Box,
  Button,
  Heading,
  Text,
  useColorMode,
  IconButton
} from "@chakra-ui/core";
import { FaHome } from "react-icons/fa";
import {Helmet} from 'react-helmet';

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  return (
    
    <Layout>
      <Helmet>
        <meta name='description' content='Creating masterful 3D multiplayer games!'></meta>
        <meta property='og:title' content="CS1 Blog"/>
        <meta property='og:image' content="//cdn.glitch.com/53f6eb06-66f0-4243-b635-db0bfec50c28%2FCS1_Banner.png?v=1589051460395"/>
        <meta property="og:description" content="Creating masterful 3D multiplayer games!"/>
        <meta property="og:url" content="//401k.glitch.me" />
      </Helmet>
      <Box>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Box>
      <Link to="/">
      <IconButton
        mt={25}
        variant="outline"
        variantColor="blue"
        aria-label="Return Home"
        icon={FaHome}
      /></Link>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
      frontmatter {
        title
      }
    }
  }
`;




