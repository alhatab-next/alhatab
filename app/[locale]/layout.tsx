import { hasLocale, Locale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { Providers } from "./providers";
import Header from "@/components/Header";

import { Rubik } from "next/font/google";
import "./globals.css";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
};

const rubik = Rubik({
  variable: "--font-rubik",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "arabic"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: Omit<Props, "children">) {
  const { locale } = await props.params;

  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function RootLayout({ children, params }: Props) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const direction = locale === "en" ? "ltr" : "rtl";

  return (
    <html className="scroll-smooth" lang={locale} dir={direction}>
      <body className={`${rubik.variable} font-rubik antialiased`}>
        <Providers>
          <NextIntlClientProvider>
            <Header />
            {children}
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
