import '../../../styles/globals.css';

import { VT323 } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { notFound } from 'next/navigation';
import { useLocale } from 'next-intl';
import { getServerSession } from 'next-auth';
import auth from '@/lib/auth';

const vt323 = VT323({ weight: '400', subsets: ['latin'] });

const locales = ['en', 'de'];

export default async function RootLayout({
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

  const session = await getServerSession(auth);

  return (
    <html lang={locale} className={vt323.className}>
      <body>
        <Navbar session={session} />
        {children}
      </body>
    </html>
  );
}
