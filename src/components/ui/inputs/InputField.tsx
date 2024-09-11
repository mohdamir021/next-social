import { Box, BoxProps, Input, InputProps, Text, TextProps } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface InputFieldProps extends InputProps {
  label: ReactNode;
  labelText: string;
  labelTextProps: TextProps;
  boxProps: BoxProps;
}

export default function InputField({
  label,
  labelText,
  labelTextProps,
  ...props
}: Partial<InputFieldProps>) {
  return (
    <Box>
      {/* Label */}
      {label ?? (
        <Text fontSize={"14px"} fontWeight={600} {...labelTextProps}>
          {labelText ?? "Label "}
        </Text>
      )}

      {/* Input */}
      <Input
        border={"1px solid"}
        borderColor={"lightgray"}
        px={3}
        py={1}
        {...props}
        _placeholder={{ fontSize: "12px", ...props?._placeholder }}
      />
    </Box>
  );
}
