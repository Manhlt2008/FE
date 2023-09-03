import type { NextPage } from "next";

const VoteInforSub: NextPage = () => {
  return (
    <div className="self-stretch bg-white overflow-hidden flex flex-row flex-wrap pt-[94px] px-0 pb-[51px] items-start justify-center gap-[58px] text-center text-6xl text-c1818 font-open-sans">
      <div className="flex flex-col items-center justify-start gap-[26px]">
        <img
          className="relative rounded-xl w-[250px] h-[159px] overflow-hidden shrink-0 md:w-[177px] md:h-[108px]"
          alt=""
          src="/thumbnail.svg"
        />
        <div className="flex flex-col items-center justify-start gap-[8px]">
          <i className="relative leading-[28px] inline-block font-light w-[236px] md:text-base md:leading-[19px]">
            <p className="m-0">Register By</p>
            <p className="m-0">October 16th</p>
          </i>
          <i className="relative text-lg leading-[23px] inline-block font-light w-[261px] md:text-base md:leading-[22px] md:w-[185px]">
            Register online, in person, or by mail by October 16, 2023.
          </i>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start gap-[26px]">
        <img
          className="relative rounded-xl w-[250px] h-[159px] overflow-hidden shrink-0 md:w-[177px] md:h-[108px]"
          alt=""
          src="/thumbnail1.svg"
        />
        <div className="flex flex-col items-center justify-start gap-[8px]">
          <i className="relative leading-[28px] inline-block font-light w-[236px] md:text-base md:leading-[19px]">
            <p className="m-0">{`Find Your `}</p>
            <p className="m-0">Polling Place</p>
          </i>
          <i className="relative text-lg leading-[23px] inline-block font-light text-[inherit] w-[261px] md:text-base md:leading-[22px] md:w-[185px]">
            <p className="m-0">{`You can find your polling `}</p>
            <p className="m-0">
              {`place `}
              <a
                className="text-[inherit]"
                href="https://vote.elections.virginia.gov/VoterInformation/PublicContactLookup"
                target="_blank"
              >
                <span className="[text-decoration:underline]">here</span>
              </a>
              . 
            </p>
          </i>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start gap-[26px]">
        <img
          className="relative rounded-xl w-[250px] h-[159px] overflow-hidden shrink-0 md:w-[177px] md:h-[108px]"
          alt=""
          src="/thumbnail2.svg"
        />
        <div className="flex flex-col items-center justify-start gap-[8px]">
          <i className="relative leading-[28px] inline-block font-light w-[236px] md:text-base md:leading-[19px]">
            Plan To Vote By November 7th
          </i>
          <i className="relative text-lg leading-[23px] inline-block font-light w-[261px] md:text-base md:leading-[22px] md:w-[185px]">
            Turn in your ballot or make your way to the polls by November 7th.
          </i>
        </div>
      </div>
    </div>
  );
};

export default VoteInforSub;
