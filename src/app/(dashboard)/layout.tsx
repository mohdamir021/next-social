import DashboardLayout from "@/components/ui/layouts/DashboardLayout";
import React from "react";

export default function PrimaryDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
