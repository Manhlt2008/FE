import type { NextPage } from "next";

const TheVirginiaVoterGuide: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col pt-0 px-0 pb-1.5 items-center justify-start text-center text-11xl text-black font-open-sans border-b-[4px] border-solid border-c1818 md:gap-[20px] md:pt-[51px] md:pb-5 md:box-border">
      <div className="self-stretch flex flex-row py-[47px] px-5 items-center justify-center gap-[65px] md:flex-col md:gap-[65px] md:pb-0 md:box-border">
        <img
          className="relative w-[203px] h-[117.75px] object-cover hidden md:flex"
          alt=""
          src="/small-butterfly@2x.png"
        />
        <div className="flex-1 rounded-11xl bg-gray-100 box-border overflow-hidden flex flex-col py-14 px-[49px] items-center justify-center gap-[35px] max-w-[584px] border-t-[4px] border-solid border-black border-r-[4px] border-b-[10px] border-l-[4px] md:pl-[39px] md:pr-[30px] md:box-border md:max-w-[960px] md:flex-[unset] md:self-stretch">
          <div className="self-stretch relative leading-[35px]">
            {" "}
            The Virginia Voter Guide
          </div>
          <i className="self-stretch relative text-lg leading-[30px] font-light text-left sm:text-base">
            <p className="m-0">
              The Virginia Voter Guide is an election resource for Virginia
              Education Association members and other members of the public who
              care about classroom sizes, teacher pay, education policy and
              overall school funding. We endorse pro-education candidates
              up-and-down the ballot because who we elect into office and local
              leadership positions will determine the quality of our state’s
              public education system for years to come.
            </p>
          </i>
        </div>
        <div className="w-[307px] h-[379.63px] flex flex-col items-center justify-center relative md:hidden">
          <img
            className="absolute my-0 mx-[!important] top-[0px] left-[-140px] w-[519.63px] h-[379.63px] object-cover z-[0]"
            alt=""
            src="/medium-buterfly@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default TheVirginiaVoterGuide;
