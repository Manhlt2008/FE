import type { NextPage } from "next";

const RequestYourVote: NextPage = () => {
  return (
    <div className="self-stretch bg-gray-200 flex flex-col pt-[82px] px-[300px] pb-[70px] items-center justify-start relative gap-[29px] text-center text-21xl text-c1818 font-open-sans md:gap-[25px] md:pt-14 md:px-[30px] md:pb-[34px] md:box-border sm:gap-[15px] sm:pl-[30px] sm:pt-[60px] sm:pr-[30px] sm:box-border">
      <div className="self-stretch relative leading-[45px] capitalize z-[0] md:font-semibold md:font-open-sans md:text-4xl md:leading-[26px] sm:text-5xl sm:leading-[26px]">
        Request your vote by mail ballot!
      </div>
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-start z-[1] text-lg text-black">
        <i className="w-full relative leading-[30px] inline-block font-light max-w-[611px] md:text-base">
          Voting by mail (sometimes called “Absentee voting”) is available to
          all Virginia voters. Voting by mail is safe, secure, and accessible.
          Login to your Virginia State voter’s portal to request your vote by
          mail ballot, so that this election, you can cast a vote for
          pro-education candidates from the comfort of your home.
        </i>
        <div className="rounded-81xl bg-yellowgreen box-border w-[267px] h-[62px] overflow-hidden shrink-0 flex flex-row p-2 items-center justify-center max-w-[300px] text-6xl text-c1818 border-t-[2px] border-solid border-black border-r-[2px] border-b-[8px] border-l-[2px] md:w-full">
          <i className="relative leading-[24.5px] font-light md:text-xl">
            Request My Ballot
          </i>
        </div>
      </div>
      <img
        className="absolute my-0 mx-[!important] top-[77px] left-[0px] w-[296.02px] h-[263.61px] object-cover z-[2] md:hidden"
        alt=""
        src="/003vavgwebsiteicons11-2@2x.png"
      />
      <img
        className="absolute my-0 mx-[!important] top-[79px] right-[0px] w-[301.12px] h-[263.59px] object-cover z-[3] md:hidden"
        alt=""
        src="/003vavgwebsiteicons10-1@2x.png"
      />
    </div>
  );
};

export default RequestYourVote;
