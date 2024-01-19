import Image from "next/image";
import React from "react";

const HomeBannerDescriptions = () => {
  return (
    <div className="grid grid-cols-12 gap-10 my-2  relative h-[40%] ">
      <div className="col-span-7 rounded-tl-[70px] rounded-bl-[70px] rounded-br-[70px] bg-[#626262] text-white pt-[90px]  py-10 px-20 text-center text-xl h-[60%]">
        <div className="h-[90%]">
          Welcome to BetMania! We're an adrenaline paradise for the thrill
          seekers, the risk-lovers, and the football fanatics! This avant-garde
          society of bettors, where logic meets luck, takes football betting to
          an unmatched level of excitement. Sit tight and get ready to redefine
          your betting spree
        </div>
      </div>
      <div className="col-span-5 h-[60%]">
        <Image
          className=" object-fill h-[100%] w-full hover:grayscale grayscale-0 transition delay-75 rounded-tr-[50%] rounded-bl-[50%]"
          src={"/home/aiGeneric4.png"}
          alt="home-banner-1"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default HomeBannerDescriptions;
//
// #626262
