"use client";

import LoginBody from "@/components/ui/body/LoginBody";
import Header from "@/components/ui/texts/Header";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  return (
    <Flex w={"full"} h={"full"} bgColor={"lightblue"} justifyContent={"end"}>
      <Flex
        w={"50%"}
        bgColor={"whitesmoke"}
        h={"full"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDir="column"
        gap={"20px"}
      >
        <Header>Social Media</Header>
        <LoginBody
          onClickLogin={() => {
            router.push(`/user`);
          }}
        />
      </Flex>
    </Flex>
  );
}
