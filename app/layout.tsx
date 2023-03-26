import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Time Box",
  description: "A To-Do List App.",
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
