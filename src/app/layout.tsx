
import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";


import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Florian Antoine - développeur Web",
  description: "Portofolio du développeur web Florian Antoine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={jost.className}>{children}</body>
    </html>
  );
}
