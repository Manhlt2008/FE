import type { NextPage } from "next";
import TheVirginiaVoterGuide from "../components/the-virginia-voter-guide";
import GuideVideo from "../components/guide-video";
import AboutUsContent2 from "../components/about-us-content2";
import Donate from "../components/donate";
import SignUp from "../components/sign-up";
import Footer from "../components/footer";

const AboutUs: NextPage = () => {
  return (
    <div className="relative [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.95)_1.07%,_#8dbd43_20.95%)] w-full overflow-hidden flex flex-col items-center justify-start text-center text-base text-gray-200 font-open-sans">
      <div className="self-stretch flex flex-row pt-[53px] pb-11 pr-[51px] pl-[83px] items-center justify-between md:pl-[30px] md:pr-[30px] md:box-border sm:pl-[30px] sm:pr-[30px] sm:box-border">
        <img
          className="relative w-[299px] h-[79px] md:w-[161px] sm:w-[161px] sm:h-[79px]"
          alt=""
          src="/logo.svg"
        />
        <div className="flex flex-row py-0 pr-[33px] pl-0 items-center justify-end gap-[29px] md:hidden sm:hidden">
          <b className="relative leading-[14.02px] uppercase lg:flex md:hidden">
            PERSONALIZE MY BALLOT
          </b>
          <b className="relative leading-[14.02px] uppercase lg:flex md:hidden">
            Voter registration status
          </b>
          <b className="relative leading-[14.02px] uppercase">Election DATES</b>
          <b className="relative leading-[14.02px] uppercase lg:flex md:hidden">
            About us
          </b>
          <div className="rounded-81xl bg-goldenrod overflow-hidden flex flex-row py-[11.5px] px-[31px] items-center justify-center text-c1818 border-t-[3px] border-solid border-black border-r-[3px] border-b-[5px] border-l-[3px] md:hidden">
            <b className="relative leading-[14.02px]">Español</b>
          </div>
        </div>
        <img
          className="relative w-10 h-10 hidden md:flex sm:flex"
          alt=""
          src="/menu.svg"
        />
      </div>
      <TheVirginiaVoterGuide />
      <GuideVideo />
      <AboutUsContent2 />
      <Donate />
      <SignUp />
      <Footer />
    </div>
  );
};

export default AboutUs;
