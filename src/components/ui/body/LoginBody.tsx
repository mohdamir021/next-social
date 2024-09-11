import { Button, VStack } from "@chakra-ui/react";
import React from "react";
import InputField from "../inputs/InputField";

export default function LoginBody() {
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
      <Button bgColor={"darkslateblue"} color={"white"} w={"full"}>
        Login
      </Button>
    </VStack>
  );
}
