import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import { Room } from "./Room";

const inter = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Figma Clone",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Room>
          {children}
        </Room>
      </body>
    </html>
  );
}
