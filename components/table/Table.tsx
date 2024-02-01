'use client';
import React, { useState } from 'react';
import { useLocale } from 'next-intl';

import { convertDate } from '@/utils/convertDate';
import { classNames } from '@/utils/conditionalClasses';
import { adjustTimeForLocale } from '@/utils/adjustTimeForLocale';
// import { PiSoccerBallLight } from 'react-icons/pi';

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
  results: TipsData;
};

const Table = ({ results }: Props) => {
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
    <div className="bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="bg-gray-900 py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h3 className="text-2xl font-semibold leading-6 text-white">
                  {locale === 'tr'
                    ? `${day} - Günün Bahisleri`
                    : `${dayEng} - Tips Of Day`}
                </h3>
              </div>
            </div>
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 table-border ">
                  <table className="min-w-full divide-y divide-gray-700 ">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0 uppercase"
                        >
                          {locale === 'tr' ? 'Saat' : 'Time'}
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-white uppercase"
                        >
                          {locale === 'tr' ? 'Ülke' : 'Country'}
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-white uppercase"
                        >
                          {locale === 'tr' ? 'Turnuva' : 'Competition'}
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-white uppercase"
                        >
                          {locale === 'tr' ? 'Takımlar' : 'Teams'}
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-white uppercase"
                        >
                          {locale === 'tr' ? 'Tahmin' : 'Tip'}
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-white uppercase"
                        >
                          {locale === 'tr' ? 'Oran' : 'Odds'}
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-white uppercase"
                        >
                          {locale === 'tr' ? 'Sonuç' : 'Result'}
                        </th>
                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                        >
                          <span className="sr-only">Pick</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {results.tips.map((item: TipData) => {
                        if (!item.competition) {
                          return null;
                        }
                        return (
                          <tr key={item._id}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm  text-white sm:pl-0">
                              {adjustTimeForLocale(item.time, locale)}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                              {item.country}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                              {item.competition}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                              {item.teams}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                              {item.tip}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                              {item.odds}
                            </td>
                            <td
                              className={classNames(
                                item.win === 'win'
                                  ? 'text-orbitPurple'
                                  : 'text-orbitOrange',
                                'whitespace-nowrap px-3 py-4 text-sm pl-7 '
                              )}
                            >
                              {item.result}
                            </td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                              <input
                                className=" appearance-none w-4 h-4 bg-white border-[1.65px] rounded border-white checked:bg-orbitPurple cursor-pointer"
                                type="checkbox"
                                onChange={(e) =>
                                  handleCheckboxChange(e, item._id)
                                }
                                checked={selectedTipIds.includes(item._id)}
                              />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <p className="text-end my-4 font-semibold text-white ">
                    {locale === 'tr' ? (
                      <>
                        <>Seçilen Toplam Oran: </>
                        <span className="text-lg">{totalOdds.toFixed(2)} </span>
                      </>
                    ) : (
                      <>
                        <>Total Rate Selected: </>
                        <span className="text-lg text-orbitPurple">
                          {totalOdds.toFixed(2)}{' '}
                        </span>
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
