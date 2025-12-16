import "./globals.css";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = {
    Site: await getTranslations("Site"),
  };
  return {
    title: t.Site("sitename"),
    description: t.Site("tagline"),
  };
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <NextIntlClientProvider>{children}</NextIntlClientProvider>
    </html>
  );
}
