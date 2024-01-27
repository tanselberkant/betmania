import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: 'IndexMeta' });

  return {
    title: t('title'),
    keywords: t('keyword'),
    description: t('description'),
  };
}

export default function AdminDashboardPage() {
  return (
    <>
      <div className="h-screen flex items-center justify-center -mt-20">
        <h2 className="text-4xl">MENUDEN YAPMAK ISTEDIGINE GORE SAYFA SEC</h2>
      </div>
    </>
  );
}
