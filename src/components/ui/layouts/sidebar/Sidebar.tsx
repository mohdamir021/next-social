import { Button, Flex, VStack } from "@chakra-ui/react";
import React from "react";
import Header from "../../texts/Header";

export default function Sidebar() {
  return (
    <Flex
      w={"full"}
      maxW={"260px"}
      bgColor={"lightblue"}
      h={"full"}
      py={"30px"}
      px={"30px"}
      flexDir={"column"}
      zIndex={2}
    >
      {/* Header */}
      <Header>Profile</Header>

      {/* Buttons */}
      <VStack mt={"30px"}>
        <Button w={"full"}>Edit Profile</Button>
        <Button w={"full"}>Log Out</Button>
      </VStack>
    </Flex>
  );
}
