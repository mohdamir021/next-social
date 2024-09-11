import { Box, HStack } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Sidebar from "./sidebar/Sidebar";
import TopBar from "./topbar/TopBar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <HStack h={"full"} w={"full"} spacing={0}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box w={"full"} h={"full"} bgColor={"lightgray"}>
        {/* Top Bar */}
        <TopBar />

        {/* Body Content */}
        <Box px={"16px"} py={"8px"}>
          {children}
        </Box>
      </Box>
    </HStack>
  );
}
