import type { NextPage } from "next";

const Welcome: NextPage = () => {
  return (
    <div className="self-stretch overflow-hidden flex flex-row items-center justify-between text-center text-6xl text-c1818 font-open-sans border-t-[4px] border-solid border-black border-b-[4px]">
      <div className="self-stretch flex-1 bg-crimson flex flex-col py-[43px] px-5 items-center justify-center">
        <div className="w-full rounded-11xl bg-white box-border overflow-hidden flex flex-col pt-[33px] px-5 pb-[26px] items-center justify-start gap-[8px] max-w-[617px] border-t-[4px] border-solid border-black border-r-[4px] border-b-[10px] border-l-[4px]">
          <div className="self-stretch flex flex-col items-center justify-center gap-[7px] md:hidden">
            <img
              className="relative w-[34px] h-[46px] overflow-hidden shrink-0"
              alt=""
              src="/layer-1.svg"
            />
            <i className="self-stretch relative leading-[35px] font-light">
              1000 Bank St, Richmond, VA 23219
            </i>
            <i className="self-stretch relative text-lg [text-decoration:underline] leading-[23px] font-light">
              Not your address?
            </i>
          </div>
          <div className="w-full relative text-21xl leading-[54px] text-black whitespace-pre-wrap text-left inline-block max-w-[512px] md:text-4xl md:leading-[26px] md:text-center">
            <p className="m-0">{`Welcome to your  `}</p>
            <p className="m-0 font-vampiro-one">
              personalized Virginia voter guide.
            </p>
          </div>
          <img
            className="relative rounded-mini w-[305px] h-36 object-cover hidden md:flex"
            alt=""
            src="/screenshot-20230822-at-331-1@2x.png"
          />
          <div className="self-stretch hidden flex-col items-center justify-center text-base md:flex">
            <img
              className="relative w-[34px] h-[46px] overflow-hidden shrink-0"
              alt=""
              src="/layer-1.svg"
            />
            <i className="self-stretch relative leading-[35px] inline-block font-light mt-[-5px]">
              1000 Bank St, Richmond, VA 23219
            </i>
            <i className="self-stretch relative [text-decoration:underline] leading-[23px] inline-block font-light mt-[-5px]">
              Not your address?
            </i>
          </div>
          <div className="rounded-81xl bg-yellowgreen box-border w-[194px] h-16 overflow-hidden shrink-0 flex flex-row p-2 items-center justify-center gap-[8px] border-t-[4px] border-solid border-black border-r-[4px] border-b-[10px] border-l-[4px] md:bg-goldenrod md:w-[300px]">
            <i className="relative leading-[24.5px] inline-block font-light w-[122px] h-7 shrink-0">
              Download
            </i>
            <img
              className="relative w-[16.5px] h-5"
              alt=""
              src="/group-9.svg"
            />
          </div>
        </div>
      </div>
      <img
        className="flex-1 relative max-w-full overflow-hidden h-[637px] object-cover md:hidden"
        alt=""
        src="/screenshot-20230822-at-331-11@2x.png"
      />
    </div>
  );
};

export default Welcome;
