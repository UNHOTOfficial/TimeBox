import React from "react";
import "./globals.css";

export const metadata = {
  title: "Time Box",
  description: "A To-Do List App.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
