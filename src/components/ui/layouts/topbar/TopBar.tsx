import { Flex } from "@chakra-ui/react";
import React from "react";
import ProfileTabButton from "./ProfileTabButton";

export default function TopBar() {
  return (
    <Flex
      h={"full"}
      maxH={"56px"}
      bgColor={"whitesmoke"}
      px={"10px"}
      py={"2px"}
      alignItems={"center"}
      boxShadow={"0px 1px 3px 1px lightgray"}
      justifyContent={"end"}
    >
      <ProfileTabButton />
    </Flex>
  );
}
