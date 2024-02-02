import React from 'react';
import { EnvelopeIcon } from '@heroicons/react/20/solid';
const SubscribeForm = () => {
  return (
    <div className="relative mt-2 rounded-md shadow-sm w-[90%] md:w-[80%]">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 ">
        <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input
        type="email"
        name="email"
        className=" w-full rounded-md border-0 py-[7px] pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 outline-none sm:text-sm sm:leading-6"
        placeholder="you@example.com"
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center  ">
        <button className="h-full w-full text-white bg-orbitPurple px-2 md:px-4 rounded-r-md">
          Submit
        </button>
      </div>
    </div>
  );
};

export default SubscribeForm;

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
