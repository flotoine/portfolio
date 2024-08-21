
import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Florian Antoine - développeur Web",
  description: "Portofolio du développeur web Florian Antoine",
};


export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
 
  // Providing all messages to the client
  // side is the easiest way to get started
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


/// language set up https://next-intl-docs.vercel.app/docs/getting-started/app-router/without-i18n-routing
