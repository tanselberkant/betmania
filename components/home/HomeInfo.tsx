import Image from "next/image";

const HomeInfo = () => {
  return (
    <div className="h-screen bg-[#63c361] ">
      <div className="max-w-7xl mx-auto grid grid-cols-12  h-full py-40 gap-20">
        <div className="col-span-6 py-10">
          <h3 className="text-[#1c3b1d] text-7xl uppercase ">
            Joy Of Prediction
          </h3>
          <p className="my-10 text-xl text-[#1c391c]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo saepe
            dolore non eum et rerum laudantium corporis magnam blanditiis ex
            excepturi, quia recusandae consequuntur reprehenderit sapiente?
            Quisquam eius illo quasi?
          </p>
          <p className="my-10 text-xl text-[#1c391c]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo saepe
            dolore non eum et rerum laudantium corporis magnam blanditiis ex
            excepturi.
          </p>
          <p className="my-10 text-xl text-[#1c391c]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo saepe
            dolore non eum et rerum laudantium corporis magnam blanditiis ex
            excepturi, quia recusandae consequuntur reprehenderit sapiente?
          </p>
        </div>
        <div className="col-span-6">
          <Image
            className="w-full h-[90%] flex justify-center rounded-lg "
            src={"/home/aiPic.png"}
            alt="home-banner-2"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
