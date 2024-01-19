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
      <div className="h-screen">
        <p>Sol Menüden Gitmek istediğin sayfayı seçebilirsin</p>
      </div>
    </>
  );
}
