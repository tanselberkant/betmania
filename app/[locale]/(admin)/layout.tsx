import '../../../styles/globals.css';

import { Rubik } from 'next/font/google';
import { notFound } from 'next/navigation';
import { useLocale } from 'next-intl';
import AdminDashboardLayout from '@/components/adminDashboard/AdminDashboardLayout';
import { getServerSession } from 'next-auth';
import auth from '@/lib/auth';

export const metadata = {
  title: 'BetsOrbit | Admin',
};

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700', '900'],
});

export default async function AdminLayout({
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
      <body>
        <AdminDashboardLayout session={session}>
          {children}
        </AdminDashboardLayout>
      </body>
    </html>
  );
}
