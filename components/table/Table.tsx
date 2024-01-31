'use client';
import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { convertDate } from '@/utils/convertDate';
import { classNames } from '@/utils/conditionalClasses';
import { adjustTimeForLocale } from '@/utils/adjustTimeForLocale';
import { PiSoccerBallLight } from 'react-icons/pi';

type TipData = {
  _id: string;
  time: string;
  countryFlagImageUrl: string;
  country: string;
  sportIconUrl: string;
  competition: string;
  teams: string;
  tip: string;
  odds: string;
  result: string;
  resultColor: string;
  win: string;
};

type TipsData = {
  _id: string;
  day: string;
  tips: TipData[];
};

type Props = {
  session?: string | null;
  results: TipsData;
};

const Table = ({ results, session }: Props) => {
  const locale = useLocale();
  const { day, dayEng } = convertDate(results.day);

  // Başlangıçta tüm tip ID'lerini seçili olarak ayarlayın
  const initialTipIds = results.tips.map((tip) => tip._id);
  const [selectedTipIds, setSelectedTipIds] = useState<string[]>(initialTipIds);

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    tipId: string
  ) => {
    const checked = e.target.checked;
    if (checked) {
      setSelectedTipIds([...selectedTipIds, tipId]);
    } else {
      setSelectedTipIds(selectedTipIds.filter((id) => id !== tipId));
    }
  };

  const totalOdds = results.tips
    .filter((tip) => selectedTipIds.includes(tip._id))
    .reduce((total, tip) => total * parseFloat(tip.odds), 1);

  const theads =
    locale === 'tr'
      ? [
          'Saat',
          'Branş',
          'Ülke',
          'Turnuva',
          'Takımlar',
          'Tahmin',
          'Oran',
          'Sonuç',
          'Çıkar',
        ]
      : [
          'Time',
          'Sport',
          'Country',
          'Competitions',
          'Teams',
          'Tip',
          'Odds',
          'Results',
          'Remove',
        ];

  return (
    <>
      <div className="flex justify-between items-center">
        <h3 className="text-green-800 text-4xl my-5">
          {locale === 'tr'
            ? `${day} - Günün Bahisleri`
            : `${dayEng} - Tips Of Day`}
        </h3>
        {session === 'admin' && (
          <Link
            href={`/admin/tables/${results._id}`}
            className="mr-4 border-2 rounded-md px-4 p-1 border-green-700"
          >
            <h1 className="text-lg font-semibold leading-6 text-black">
              Update
            </h1>
          </Link>
        )}
      </div>
      <div className="relative bg-indigo-400 rounded-t-md">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-sm text-white uppercase bg-indigo-400">
            <tr>
              {theads.map((item, index) => (
                <th key={index} scope="col" className="px-6 py-3">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {results.tips.map((item: TipData) => {
              if (!item.competition) {
                return null;
              }

              return (
                <tr
                  key={item._id}
                  className="bg-[#a2e0a9] border-b text-green-800"
                >
                  <td className="px-6 py-4">
                    {adjustTimeForLocale(item.time, locale)}
                  </td>
                  <td className="px-6 py-4">
                    <PiSoccerBallLight
                      color="FF0000"
                      className="animate-spin w-5 h-5"
                    />
                  </td>
                  <td className="px-6 py-4">{item.country}</td>
                  <td className="px-6 py-4">{item.competition}</td>
                  <td scope="row" className="px-6 py-4">
                    {item.teams}
                  </td>
                  <td className="px-6 py-4">{item.tip}</td>
                  <td className="px-6 py-4">{item.odds}</td>
                  <td
                    className={classNames(
                      item.win === 'win' ? 'text-green-600' : 'text-red-700',
                      'px-11 py-4'
                    )}
                  >
                    {item.result}
                  </td>
                  <td className="pl-7 py-4">
                    <input
                      type="checkbox"
                      onChange={(e) => handleCheckboxChange(e, item._id)}
                      checked={selectedTipIds.includes(item._id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="text-center my-2">
          {locale === 'tr'
            ? `Seçilen Toplam Oran: ${totalOdds.toFixed(2)}`
            : `Total Rate Selected: ${totalOdds.toFixed(2)}`}
        </p>
      </div>
    </>
  );
};

export default Table;

// Tanıtım Metni Önerisi:
// "BetOrbit'e Hoş Geldiniz - Bahis Evreniniz! Yıldızlar arası en keskin bahis tavsiyeleri, maç analizleri ve kazanma stratejileriyle galaksiler ötesi bir keşfe çıkın. Futbolun büyüleyici dünyasında, her bir maç bir gezegen kadar zengin ve çeşitli. BetOrbit, size bu evrende gezinirken, en değerli bahis fırsatlarını bulmanız için rehberlik eder. Galaksi içindeki en iyi oranlar, yıldız futbolcuların performans analizleri ve kupon tavsiyeleriyle, bahis galaksinizdeki hakimiyetinizi sağlamlaştırın. BetOrbit, bahisçilerin yeni evi - nerede olursanız olun, kazanmanın sınırlarını zorlayın."

// Logo Tasarımı Önerisi:
// BetOrbit için bir logo tasarımı, uzay temalı unsurlar içerebilir. Örneğin, bir futbol topunun etrafında dönen gezegen halkaları veya bir bahis kuponunun yıldızlar arasında uçtuğunu gösteren bir tasarım düşünülebilir. Renkler olarak koyu lacivert, gümüş ve turuncu tonları, uzayın derinliklerini ve enerjiyi yansıtırken, aynı zamanda dikkat çekici ve profesyonel bir görünüm sağlayabilir.

// Site Yapısı Önerisi:
// Ana Sayfa: Kullanıcıları galaksi temalı bir arka planla karşılayan ve günlük maçlar, bahis tavsiyeleri ve öne çıkan oranları gösteren dinamik bir görsel.
// Maç Analizleri: Derinlemesine maç önizlemeleri ve analizleri sunan bir bölüm. Her bir analiz, "Galaksi Keşfi" temasıyla sunulabilir.
// Bahis Rehberi: Bahis stratejileri, terimlerin açıklamaları ve başarılı bahisler için ipuçlarını içeren bir kaynak merkezi.
// Kupon Tavsiyeleri: Günlük veya haftalık en iyi kupon önerilerinin yer aldığı, "Yıldız Geçidi" olarak adlandırılabilecek bir bölüm.
// Blog: Bahis dünyasından haberler, oyuncu analizleri ve uzman görüşlerini içeren, "Uzay Günlüğü" adlı bir blog.

// Ana Renkler:
// Koyu Lacivert (Navy Blue): Derinlik ve uzayın sonsuzluğunu simgeler. Hex Kodu: #0B3D91
// Gümüş (Silver): Teknoloji ve modernliği ifade eder, ayrıca uzay gemileri ve yıldızların parıltısını anımsatır. Hex Kodu: #C0C0C0
// Yardımcı Renkler:
// Turuncu (Orange): Enerji ve heyecanı temsil eder, koyu temada dikkat çekici bir kontrast oluşturur. Hex Kodu: #FF5722
// Açık Gri (Light Grey): Metin ve diğer unsurlar için kullanılabilir, okunabilirliği artırır ve tasarımı yumuşatır. Hex Kodu: #E0E0E0
// Koyu Gri (Dark Grey): Arka plan ve UI elementleri için derinlik ve zenginlik katar. Hex Kodu: #333333
// Vurgu Renkleri:
// Mavi-Gri (Blue Grey): Soğuk ve profesyonel bir his verir, uzay temasıyla uyum sağlar. Hex Kodu: #607D8B
// Parlak Mavi (Bright Blue): İnteraktif elementler ve bağlantılar için canlılık katar. Hex Kodu: #1E88E5
