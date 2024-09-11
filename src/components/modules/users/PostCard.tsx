import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/react";
import React from "react";

export default function PostCard() {
  return (
    <Card w={"full"} maxW={"400px"} h={"fit-content"}>
      <CardHeader>Post</CardHeader>
      <CardBody>Body</CardBody>
      <CardFooter>Footer</CardFooter>
    </Card>
  );
}
