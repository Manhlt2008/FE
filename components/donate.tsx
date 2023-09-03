import type { NextPage } from "next";

const Donate: NextPage = () => {
  return (
    <div className="self-stretch bg-royalblue overflow-hidden flex flex-col py-[105px] px-5 items-center justify-center gap-[8px] text-center text-21xl text-black font-open-sans border-t-[2px] border-solid border-black border-b-[4px] md:pt-[70px] md:pb-5 md:box-border">
      <div className="w-full rounded-10xl bg-white box-border flex flex-col pt-2 px-5 pb-[46px] items-center justify-start relative gap-[26px] max-w-[538px] border-t-[4px] border-solid border-black border-r-[4px] border-b-[10px] border-l-[4px] md:hidden">
        <b className="self-stretch relative leading-[45px] inline-block h-[39px] shrink-0 z-[0]">
          Donate!
        </b>
        <div className="self-stretch relative text-lg leading-[23px] z-[1]">
          <i className="font-light">{`If you’d like to make a financial contribution to The Virginia Voter Guide, contribute to The VEA Fund for Children and Public Education `}</i>
          <i className="font-bold">by visiting this page</i>
        </div>
        <img
          className="absolute my-0 mx-[!important] top-[-0.5px] left-[475px] w-[186px] h-64 z-[2] md:hidden"
          alt=""
          src="/icon.svg"
        />
      </div>
      <div className="rounded-smi bg-white box-border w-[350px] h-[170px] overflow-hidden shrink-0 hidden flex-col py-2 px-2.5 items-center justify-center gap-[8px] text-4xl border-t-[2px] border-solid border-black border-r-[2px] border-b-[4px] border-l-[2px] md:flex">
        <div className="relative leading-[26px] inline-block w-[196px] h-[23px] shrink-0">
          Donate!
        </div>
        <div className="self-stretch relative text-base leading-[25px]">
          <span>{`If you’d like to make a financial contribution to The Virginia Voter Guide, contribute to The VEA Fund for Children and Public Education by `}</span>
          <b>visiting this page.</b>
        </div>
      </div>
    </div>
  );
};

export default Donate;
