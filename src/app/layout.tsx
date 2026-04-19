import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "Advanced Management Performance | AMP",
  description:
    "Strategic consulting that drives measurable results for leadership teams and organizations.",
  icons: {
    icon: "/logo-favicon-source.png",
    apple: "/logo-favicon-source.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} antialiased`}>{children}</body>
    </html>
  );
}
