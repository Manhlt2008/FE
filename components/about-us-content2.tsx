import type { NextPage } from "next";

const AboutUsContent2: NextPage = () => {
  return (
    <div className="self-stretch bg-black overflow-hidden flex flex-row pt-0 px-0 pb-1 box-border items-center justify-center gap-[4px] min-h-[415px] text-left text-21xl text-black font-open-sans md:flex-col md:gap-[0px]">
      <div className="flex-1 bg-goldenrod overflow-hidden flex flex-col items-center justify-center gap-[8px] min-w-[646px] min-h-[570px] md:min-w-[24px] md:min-h-[224px] md:flex-[unset] md:self-stretch">
        <div className="rounded-11xl bg-white box-border w-[646px] h-80 flex flex-row py-[52px] px-[35px] items-end justify-center border-t-[4px] border-solid border-black border-r-[4px] border-b-[10px] border-l-[4px] md:hidden">
          <div className="flex-1 relative leading-[54px] md:text-4xl md:leading-[30px]">
            <span>Support for this voter guide comes from</span>
            <i className="font-bold">{` public education champions `}</i>
            <span>from across the state.</span>
          </div>
          <img
            className="relative w-[38.67px] h-7 md:hidden"
            alt=""
            src="/vector.svg"
          />
        </div>
        <div className="rounded-[13.56px] bg-white box-border w-[350px] h-[168px] overflow-hidden shrink-0 hidden flex-row py-2 px-3.5 items-center justify-center text-4xl border-t-[2px] border-solid border-black border-r-[2px] border-b-[4px] border-l-[2px] md:flex">
          <div className="flex-1 relative leading-[35px] md:text-4xl md:leading-[30px]">
            <span>Support for this voter guide comes from</span>
            <i className="font-bold">{` public education champions `}</i>
            <span>from across the state.</span>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-white h-[570px] overflow-hidden flex flex-row items-center justify-center gap-[50px] min-w-[646px] min-h-[570px] md:bg-goldenrod md:h-56 md:rounded-none md:min-w-[224px] md:min-h-[224px] md:flex-[unset] md:self-stretch">
        <img
          className="relative w-[244px] h-[211px] object-cover md:w-[146.35px] md:h-[146.35px] md:rounded-xl"
          alt=""
          src="/thumbnail-2@2x.png"
        />
        <img
          className="relative w-[244px] h-[211px] object-cover md:w-[146.35px] md:h-[146.35px] md:rounded-xl"
          alt=""
          src="/thumbnail-2@2x.png"
        />
      </div>
    </div>
  );
};

export default AboutUsContent2;
