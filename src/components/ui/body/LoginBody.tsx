import { Button, VStack } from "@chakra-ui/react";
import React from "react";
import InputField from "../inputs/InputField";

interface LoginBodyProps {
  onClickLogin: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function LoginBody({ onClickLogin }: Partial<LoginBodyProps>) {
  return (
    <VStack justifyContent={"start"}>
      {/* Username / Email */}
      <InputField
        labelText="Username / Email"
        autoComplete="off"
        placeholder="Enter Username / Email"
      />

      {/* Password */}
      <InputField
        labelText="Password"
        type="password"
        autoComplete="off"
        placeholder="Enter Password"
      />

      {/* Button */}
      <Button bgColor={"darkslateblue"} color={"white"} w={"full"} onClick={onClickLogin}>
        Login
      </Button>
    </VStack>
  );
}
