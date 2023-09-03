import type { NextPage } from "next";

const ElectrionInformation: NextPage = () => {
  return (
    <div className="self-stretch overflow-hidden flex flex-col pt-[54px] px-[30px] pb-[18px] items-center justify-start gap-[28px] text-center text-31xl text-c1818 font-open-sans md:gap-[10px] md:pt-5 md:box-border">
      <div className="self-stretch relative leading-[55px] md:text-11xl md:leading-[32px]">
        Election Information Center
      </div>
      <i className="self-stretch relative text-6xl leading-[30px] font-light md:text-base md:leading-[20px]">
        Up-to-date information about the November 2023 General Election.
      </i>
      <div className="w-full rounded-11xl bg-white box-border hidden flex-col pt-[27px] px-[19px] pb-[26px] items-center justify-start relative gap-[15px] max-w-[350px] text-4xl text-black border-t-[2px] border-solid border-black border-r-[2px] border-b-[5px] border-l-[2px] md:flex">
        <div className="w-full relative leading-[26px] inline-block max-w-[254px] z-[0]">
          Are you ready for November 7th?
        </div>
        <i className="self-stretch relative text-base leading-[25px] font-light text-[inherit] z-[1]">
          <p className="m-0">
            <a
              className="text-[inherit]"
              href="https://vote.elections.virginia.gov/VoterInformation"
              target="_blank"
            >
              <span className="[text-decoration:underline]">
                Click here to register!
              </span>
            </a>
            <span className="[text-decoration:underline]">{` `}</span>Even if
            you register after the deadline, you can still vote! Just ask for a
            provisional ballot at your polling place or early voting location.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            {`If you’re already registered to vote, first `}
            <a
              className="text-[inherit]"
              href="https://vote.elections.virginia.gov/thirdparty/registerVA"
              target="_blank"
            >
              <span className="[text-decoration:underline]">double-check</span>
            </a>
            <span className="[text-decoration:underline]">{` `}</span>to make
            sure that all your information is accurate.
          </p>
        </i>
        <img
          className="absolute my-0 mx-[!important] top-[274.95px] left-[288px] w-[63px] h-[75px] overflow-hidden shrink-0 z-[2]"
          alt=""
          src="/isolation-mode.svg"
        />
      </div>
    </div>
  );
};

export default ElectrionInformation;
