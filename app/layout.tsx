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
    <html lang="en" className="dark">
      <body className="bg-slate-100 dark:bg-slate-900 dark:text-slate-100">{children}</body>
    </html>
  );
}
