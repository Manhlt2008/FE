import type { NextPage } from "next";

const AreYouReady: NextPage = () => {
  return (
    <div className="self-stretch bg-white overflow-hidden flex flex-row items-center justify-start text-center text-21xl text-black font-open-sans">
      <div className="flex-1 bg-goldenrod overflow-hidden flex flex-col py-[67px] px-5 items-center justify-center border-t-[4px] border-solid border-c1818 border-r-[4px] border-b-[4px] md:hidden">
        <div className="w-full rounded-11xl bg-white box-border h-[364px] flex flex-col pt-[42px] px-[30px] pb-2 items-center justify-start relative gap-[32px] max-w-[485px] border-t-[4px] border-solid border-black border-r-[4px] border-b-[10px] border-l-[4px]">
          <div className="self-stretch relative leading-[45px] z-[0]">
            Are you ready for November 7th?
          </div>
          <i className="self-stretch relative text-lg leading-[23px] font-light text-[inherit] z-[1]">
            <p className="m-0">
              <a
                className="text-[inherit]"
                href="https://vote.elections.virginia.gov/VoterInformation"
                target="_blank"
              >
                <span className="[text-decoration:underline]">
                  Click here to register!
                </span>
              </a>{" "}
              Even if you register after the deadline, you can still vote! Just
              ask for a provisional ballot at your polling place or early voting
              location.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              {`If you’re already registered to vote, first `}
              <a
                className="text-[inherit]"
                href="https://vote.elections.virginia.gov/thirdparty/registerVA"
                target="_blank"
              >
                <span className="[text-decoration:underline]">
                  double-check
                </span>
              </a>{" "}
              to make sure that all your information is accurate.
            </p>
          </i>
          <img
            className="absolute my-0 mx-[!important] top-[288px] right-[-24.78px] w-[86.78px] h-[93.32px] overflow-hidden shrink-0 z-[2]"
            alt=""
            src="/isolation-mode1.svg"
          />
        </div>
      </div>
      <img
        className="flex-1 relative max-w-full overflow-hidden h-[506px] object-cover md:self-stretch md:h-auto"
        alt=""
        src="/pexelscottonbrostudio6209361-1@2x.png"
      />
    </div>
  );
};

export default AreYouReady;
