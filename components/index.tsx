import type { NextPage } from "next";

const MenuOverlay: NextPage = () => {
  return (
    <div className="w-[807px] h-[896px] overflow-hidden flex flex-col items-center justify-start text-center text-xl text-gray font-open-sans">
      <div className="self-stretch [background:linear-gradient(180deg,_#fef3d7,_#fbc847)] overflow-hidden flex flex-col pt-[98px] px-0 pb-[88px] items-center justify-start gap-[99px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[49px]">
          <b className="relative leading-[20px]">About Us</b>
          <b className="relative leading-[20px]">Election Information</b>
          <b className="relative leading-[20px]">Personalize My Ballot</b>
          <b className="relative leading-[24.5px]">Voter Registration Status</b>
          <b className="relative leading-[24.5px]">Privacy Policy</b>
          <b className="relative leading-[24.5px]">ContactContact</b>
        </div>
        <div className="rounded-[62px] bg-yellowgreen box-border w-[300px] h-[50px] overflow-hidden shrink-0 flex flex-row p-2 items-center justify-center border-t-[2px] border-solid border-black border-r-[2px] border-b-[5px] border-l-[2px]">
          <i className="relative leading-[15.14px] font-light">Español</i>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
