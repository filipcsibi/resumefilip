import type { Metadata } from "next";
import "../styles/globals.css";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Filip Csibi",
  description: "Personal resume website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="oEpg69vV_8MXGx_FBcqdXhiK6voQzyLrDwnbeRWrrbQ"
        />
      </head>
      <body className={playfair.className}>{children}</body>
    </html>
  );
}
