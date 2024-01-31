import '../../../styles/globals.css';

// import { VT323 } from 'next/font/google';
import { Rubik } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { notFound } from 'next/navigation';
import { useLocale } from 'next-intl';
import { getServerSession } from 'next-auth';
import auth from '@/lib/auth';

// const vt323 = VT323({ weight: '400', subsets: ['latin'] });

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700', '900'],
});

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
    <html lang={locale} className={rubik.className}>
      <body className="bg-betOrbitMainDark">
        <Navbar session={session} />
        {children}
      </body>
    </html>
  );
}
