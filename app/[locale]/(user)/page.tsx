import ArrowAfterBanner from '@/components/home/ArrowAfterBanner';
import HomeBanner from '@/components/home/HomeBanner';
import HomeInfo from '@/components/home/HomeInfo';
import TableContainer from '@/components/table/TableContainer';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: 'IndexMeta' });

  return {
    title: t('title'),
    keywords: t('keyword'),
    description: t('description'),
  };
}

export default function Home() {
  return (
    <div className="relative">
      <HomeBanner />
      <HomeInfo />
      <TableContainer />
      <div className="h-screen"></div>
    </div>
  );
}
