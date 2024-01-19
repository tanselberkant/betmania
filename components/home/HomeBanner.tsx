import React from "react";
import HomeBrandText from "./HomeBrandText";
import HomeBannerDescriptions from "./HomeBannerDescriptions";
import Image from "next/image";

const HomeBanner = () => {
  return (
    <div className="max-w-7xl mx-auto relative  xl:h-screen  ">
      {/* >> ABSOLUTE ELEMENTS */}
      <div className="w-[240px] h-[360px] border-[0.5px] border-green-800 rounded-full absolute rotate-[35deg] top-12 -left-20"></div>
      <div className="w-[240px] h-[360px] border-[0.5px] border-green-800 rounded-full absolute rotate-[35deg] bottom-12 -right-20"></div>
      <div className="w-[240px] h-[360px] border-[0.5px] border-green-800 rounded-full absolute rotate-[-35deg] bottom-12 -right-20"></div>
      {/* << ABSOLUTE ELEMENTS */}

      <HomeBrandText />
      <HomeBannerDescriptions />

      {/* HOME BTN  */}
      <div className="grid grid-cols-12 gap-10 -mt-4 h-[200px]   relative">
        <div className="col-span-5 relative h-full">
          <Image
            className=" object-fill  w-full hover:grayscale grayscale-0 transition delay-75 rounded-tl-[120px] 120px] rounded-br-[120px] rounded-tr-[120px] h-[200px] "
            src={"/home/aiGeneric1.png"}
            alt="home-banner-2"
            width={100}
            height={100}
          />
        </div>
        <button
          id="homeBtn"
          className="col-span-7 leading-5 bg-[#626262] hover:bg-green-800 transition delay-100 font-bold text-white py-2 px-10 text-[100px] w-full border-2 border-green-800 rounded-[90px] "
        >
          <div className="w-full flex justify-center animate-spin relative z-10">
            <Image
              className="rounded-full "
              src={"/home/ball.jpg"}
              width={100}
              height={100}
              alt="football"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default HomeBanner;
