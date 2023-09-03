import type { NextPage } from "next";

const FAQ: NextPage = () => {
  return (
    <div className="self-stretch bg-goldenrod overflow-hidden flex flex-col py-[74px] px-5 items-center justify-center text-left text-21xl text-black font-open-sans border-t-[4px] border-solid border-black border-b-[4px]">
      <div className="w-full rounded-11xl bg-gray-100 box-border overflow-hidden flex flex-col pt-[46px] px-[60px] pb-0 items-center justify-start gap-[41px] max-w-[830px] border-t-[4px] border-solid border-black border-r-[4px] border-b-[10px] border-l-[4px] md:gap-[25px] md:pl-[18px] md:pt-5 md:pr-[18px] md:box-border">
        <div className="self-stretch relative leading-[45px] text-c1818 text-center md:hidden">
          Frequently Asked Questions
        </div>
        <div className="self-stretch overflow-hidden hidden flex-row items-center justify-between text-4xl md:flex">
          <div className="relative leading-[26px]">Voting FAQ</div>
          <img
            className="relative w-[23.45px] h-[23.45px]"
            alt=""
            src="/vector1.svg"
          />
        </div>
        <div className="self-stretch relative box-border h-[3px] hidden border-t-[3px] border-solid border-black md:flex" />
        <i className="self-stretch relative text-lg font-light">
          <p className="m-0 leading-[30px]">
            Can I bring my children to the polls with me when I vote?
          </p>
          <p className="m-0 leading-[30px]">
            Yes! You can bring your kids to the polls with you. Please keep in
            mind that state law only allows for children under the age of 15 to
            accompany you into the voting booth.
          </p>
          <p className="m-0 leading-[30px]">&nbsp;</p>
          <p className="m-0 leading-[30px]">
            I have a disability and need assistance casting my vote at the
            polls. What are my options?
          </p>
          <p className="m-0 leading-[30px]">
            If you have a disability and require assistance casting a vote, an
            election official at the polls can help you cast your vote. You can
            also bring your own helper to the polls to assist you. 
          </p>
          <p className="m-0 leading-[30px]">&nbsp;</p>
          <p className="m-0">
            <span className="leading-[30px]">I lost my vote by mail</span>
            <span className="leading-[25px]">
              {" "}
              ballot, and it’s too late to request a new one. Can I still cast a
              vote in the November 2023 election?
            </span>
          </p>
          <p className="m-0 leading-[30px]">
            Yes! You can visit your local polling place during the early vote
            period (up until November 4th) or on Election Day (November 7th) and
            vote provisionally. You may need to provide additional information
            after Election Day to finalize or “cure” your vote, but remember -
            every vote counts!
          </p>
        </i>
      </div>
    </div>
  );
};

export default FAQ;
