import type { Metadata } from "next";
import "../styles/globals.css";
import { Playfair_Display } from "next/font/google";
export const metadata: Metadata = {
  title: "Your Name - Resume",
  description: "Personal resume website",
};
export const playfair = Playfair_Display({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={playfair.className}>{children}</body>
    </html>
  );
}
