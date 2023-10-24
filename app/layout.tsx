import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Travel App",
  description: "Travel UI/UX App for Capming",
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
