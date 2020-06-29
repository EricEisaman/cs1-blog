import React from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  useColorMode,
  IconButton
} from "@chakra-ui/core";
import NoFlashScript from "./NoFlashScript.js"

export default function Layout({ children }) {
  const { toggleColorMode } = useColorMode();
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <NoFlashScript></NoFlashScript>
      {children}
      <br></br>
      <Button mt={25} variantColor="blue" onClick={toggleColorMode}>
          Toggle color mode
      </Button>
    </div>
  )
}