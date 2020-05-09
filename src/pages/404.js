import React from "react";
import { Box, Heading, Text} from "@chakra-ui/core";
import Layout from "../components/layout"

const Page404 = () => {
  return (
    <Layout>
    <Box p={5}>
      <Heading size="md" mb={5}>
        404
      </Heading>
      <Text mb={3}>We couldn't find what your looking for.</Text>
    </Box>
    </Layout>
  );
};

export default Page404;