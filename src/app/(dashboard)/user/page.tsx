import PostCard from "@/components/modules/users/PostCard";
import { Stack } from "@chakra-ui/react";
import React from "react";

export default function UserPage() {
  return (
    <Stack w={"full"} h={"full"} direction="row" wrap={"wrap"}>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </Stack>
  );
}
