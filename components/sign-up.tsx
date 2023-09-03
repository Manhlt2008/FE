import type { NextPage } from "next";

const SignUp: NextPage = () => {
  return (
    <div className="self-stretch bg-c1818 flex flex-row py-[75px] px-[39px] items-center justify-center relative text-center text-11xl text-white font-open-sans">
      <div className="flex-1 flex flex-col items-center justify-start gap-[33px] max-w-[757px] z-[0]">
        <div className="self-stretch relative leading-[35px]">{`Sign up for election updates & other news!`}</div>
        <div className="self-stretch flex flex-col items-center justify-center gap-[18px] text-left text-xl text-gray-300">
          <div className="self-stretch rounded-8xs flex flex-row items-center justify-center gap-[40px]">
            <div className="flex-1 rounded-8xs bg-white flex flex-row py-3 px-2.5 box-border items-center justify-start max-w-[226px]">
              <i className="relative leading-[24px] inline-block font-light w-[122px] h-[15px] shrink-0">
                First Name*
              </i>
            </div>
            <div className="flex-1 rounded-8xs bg-white flex flex-row py-3 px-2.5 box-border items-center justify-start max-w-[226px]">
              <i className="relative leading-[24px] inline-block font-light w-[122px] h-[15px] shrink-0">
                Last Name*
              </i>
            </div>
          </div>
          <div className="w-full rounded-8xs bg-white flex flex-row py-3 px-2.5 box-border items-center justify-start max-w-[492px]">
            <i className="relative leading-[24px] inline-block font-light w-[122px] h-[15px] shrink-0">
              Email*
            </i>
          </div>
        </div>
        <div className="rounded-81xl bg-goldenrod shadow-[0px_4px_0px_#1c1818] box-border w-[194px] h-[59px] flex flex-row p-2.5 items-center justify-center text-6xl text-c1818 border-[3px] border-solid border-c1818 md:w-[300px]">
          <i className="self-stretch flex-1 relative leading-[24.5px] flex font-bold items-center justify-center">
            Submit
          </i>
        </div>
      </div>
      <img
        className="absolute my-0 mx-[!important] top-[-61px] right-[7px] w-[126px] h-[174px] overflow-hidden shrink-0 hidden z-[1] md:flex"
        alt=""
        src="/layer-1.svg"
      />
    </div>
  );
};

export default SignUp;
