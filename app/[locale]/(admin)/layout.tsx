import "../../../styles/globals.css";

import { VT323 } from "next/font/google";
import { notFound } from "next/navigation";
import { useLocale } from "next-intl";

const vt323 = VT323({ weight: "400", subsets: ["latin"] });

const locales = ["en", "de"];

export default function AdminLayout({
  children,
  // params: locale,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const locale = useLocale();
  // console.log(locale);
  if (params.locale !== locale) notFound();

  return (
    <html lang={locale} className={vt323.className}>
      <body>
        <h2 className="text-xl text-center">Admin</h2>
        {children}
      </body>
    </html>
  );
}
