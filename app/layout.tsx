import React from "react";
import "./globals.css";

export const metadata = {
  title: "Time Box",
  description: "A To-Do List App.",
  icons: {
    icon: "/favicon.png",
    apple: "/icons/icon-192x192.png",
  },
  manifest: "/manifest.json",
  themeColor: "black",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-100 dark:bg-slate-900 dark:text-slate-100 dark:caret-slate-100">
        {children}
      </body>
    </html>
  );
}
