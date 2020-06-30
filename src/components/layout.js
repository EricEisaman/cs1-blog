import React from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  useColorMode,
  IconButton
} from "@chakra-ui/core";

export default function Layout({ children }) {
  const { toggleColorMode } = useColorMode();
  return (
     <Box 
       mx={"auto"}
       p={[0, 0, 10, 5]}
       fontSize={["xs", "xs", "md", "lg"]}
       width={[
          "100%", // base
          "100%", // 480px upwards
          "100%", // 768px upwards
          "100%", // 992px upwards
       ]}
       >
      {children}
      <br></br>
      <Button 
        mx={"3vw"}
        mb={"5vh"}
        mt={25} variantColor="blue" onClick={toggleColorMode}>
          Toggle color mode
      </Button>
    </Box>
  )
}