import LoginBody from "@/components/ui/body/LoginBody";
import Header from "@/components/ui/texts/Header";
import { Flex } from "@chakra-ui/react";

export default function Login() {
  return (
    <Flex w={"full"} h={"100vh"} bgColor={"lightblue"} justifyContent={"end"}>
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
        <LoginBody />
      </Flex>
    </Flex>
  );
}
