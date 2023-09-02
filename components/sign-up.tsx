import type { NextPage } from "next";

const SignUp: NextPage = () => {
  return (
    <div className="self-stretch bg-c1818 flex flex-row py-[75px] px-5 items-center justify-center relative text-center text-11xl text-white font-open-sans">
      <div className="flex-1 flex flex-col items-center justify-start gap-[33px] max-w-[757px] z-[0]">
        <div className="self-stretch relative leading-[35px]">{`Sign up for election updates & other news!`}</div>
        <div className="self-stretch flex flex-col items-center justify-center gap-[18px]">
          <div className="self-stretch rounded-8xs flex flex-row items-center justify-center gap-[40px]">
            <input
              className="[border:none] flex font-light font-open-sans text-xl bg-white flex-1 rounded-8xs flex-row py-3 px-2.5 box-border items-center justify-start max-w-[226px]"
              type="text"
              placeholder="First Name*"
            />
            <input
              className="[border:none] flex font-light font-open-sans text-xl bg-white flex-1 rounded-8xs flex-row py-3 px-2.5 box-border items-center justify-start max-w-[226px]"
              type="text"
              placeholder="Last Name*"
            />
          </div>
          <input
            className="[border:none] flex font-light font-open-sans text-xl bg-white w-full rounded-8xs flex-row py-3 px-2.5 box-border items-center justify-start max-w-[492px]"
            type="text"
            placeholder="Email*"
          />
        </div>
        <button className="cursor-pointer p-2.5 bg-goldenrod rounded-81xl shadow-[0px_4px_0px_#1c1818] box-border w-[194px] h-[59px] flex flex-row items-center justify-center border-[3px] border-solid border-c1818">
          <i className="self-stretch flex-1 relative text-6xl leading-[24.5px] flex font-bold font-open-sans text-c1818 text-center items-center justify-center">
            Submit
          </i>
        </button>
      </div>
      <img
        className="absolute my-0 mx-[!important] top-[-61px] right-[7px] w-[126px] h-[174px] overflow-hidden shrink-0 hidden z-[1]"
        alt=""
        src="/layer-1.svg"
      />
    </div>
  );
};

export default SignUp;
