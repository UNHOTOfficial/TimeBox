"use client";

import handleDarkMode from "@/services/DarkMode";
import { SetTheme } from "@/services/UseEffect";
import React, { useEffect } from "react";
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
  SetTheme();

  return (
    <html lang="en">
      <body className="bg-slate-100 dark:bg-slate-900 dark:text-slate-100">
        {children}
      </body>
    </html>
  );
}
