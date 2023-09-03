import type { NextPage } from "next";

const GuideVideo: NextPage = () => {
  return (
    <div className="self-stretch bg-c1818 overflow-hidden flex flex-col py-[57px] px-0 items-center justify-center md:py-[37px] md:px-5 md:box-border">
      <img
        className="relative w-[826px] h-[465px] object-cover md:w-[350px] md:h-[196.px] md:rounded-11xl sm:self-stretch sm:w-auto sm:flex-1 sm:rounded-11xl"
        alt=""
        src="/video@2x.png"
      />
    </div>
  );
};

export default GuideVideo;
