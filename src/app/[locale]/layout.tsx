
import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';


import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Florian Antoine - développeur Web",
  description: "Portofolio du développeur web Florian Antoine",
};


export default async function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={jost.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
