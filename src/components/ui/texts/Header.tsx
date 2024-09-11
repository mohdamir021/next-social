import { Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface HeaderProps extends Text {
  children: ReactNode;
}

export default function Header({ children }: Partial<HeaderProps>) {
  return (
    <Text fontSize={"18px"} fontWeight={700}>
      {children ?? "Header"}
    </Text>
  );
}
