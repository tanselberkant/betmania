import HomeBanner from "@/components/home/HomeBanner";
import HomeInfo from "@/components/home/HomeInfo";
import TableContainer from "@/components/table/TableContainer";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: "IndexMeta" });

  return {
    title: t("title"),
    keywords: t("keyword"),
    description: t("description"),
  };
}

export default function Home() {
  return (
    <>
      <HomeBanner />
      <HomeInfo />
      <TableContainer />
      <div className="h-screen">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          eius veritatis, ut reprehenderit molestiae modi, similique blanditiis
          officia soluta quaerat ipsum minima ipsa laborum, voluptatibus rerum
          porro est molestias labore?
        </p>
      </div>
    </>
  );
}
