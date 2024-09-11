import { Box, HStack } from "@chakra-ui/react";
import React from "react";

export default function ProfileTabButton() {
  return (
    <HStack
      bgColor={"lightblue"}
      boxSize={"fit-content"}
      px={"12px"}
      py={"6px"}
      rounded={"8px"}
    >
      <Box boxSize={"40px"} rounded={"full"} bgColor={"purple"} />

      <Box ml={2}>User 1</Box>
    </HStack>
  );
}
