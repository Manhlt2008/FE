import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <div className="self-stretch bg-yellowgreen overflow-hidden flex flex-col py-0 px-5 items-center justify-start text-left text-6xl text-black font-open-sans">
      <div className="self-stretch bg-yellowgreen overflow-hidden flex flex-row flex-wrap pt-[79px] px-[99px] pb-[43px] items-center justify-between md:items-center md:justify-center md:pl-0.5 md:pt-[35px] md:pr-5 md:box-border">
        <div className="flex flex-col items-start justify-start gap-[20px] md:items-center md:justify-start sm:gap-[25px]">
          <b className="relative leading-[22px] md:text-center">
            The Virginia Voter Guide
          </b>
          <div className="relative text-base leading-[13.99px] uppercase md:text-center">{`Share with your friends & family`}</div>
          <div className="flex flex-row items-start justify-start md:items-center md:justify-start">
            <a
              className="[text-decoration:none] flex flex-col p-2 items-start justify-start"
              href="https://www.google.com/"
              target="_blank"
            >
              <img
                className="relative w-[21.86px] h-[17.18px]"
                alt=""
                src="/twitter-negative.svg"
              />
            </a>
            <a
              className="[text-decoration:none] flex flex-row p-2 items-start justify-start"
              href="https://www.google.com/"
              target="_blank"
            >
              <img
                className="relative w-[21.86px] h-[21.86px] overflow-hidden shrink-0"
                alt=""
                src="/facebook--negative.svg"
              />
            </a>
            <a
              className="[text-decoration:none] flex flex-row p-2 items-start justify-start"
              href="https://www.youtube.com/"
              target="_blank"
            >
              <img
                className="relative w-[21.86px] h-[21.86px] overflow-hidden shrink-0"
                alt=""
                src="/instagram--negative.svg"
              />
            </a>
            <a
              className="[text-decoration:none] flex flex-row p-2 items-start justify-start"
              href="https://www.google.com/"
              target="_blank"
            >
              <img
                className="relative w-[21.86px] h-[21.86px]"
                alt=""
                src="/in-negative.svg"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[20px] text-center text-base md:hidden">
          <div className="relative leading-[13.99px] uppercase font-semibold">
            Donate
          </div>
          <div className="relative leading-[13.99px] uppercase font-semibold">
            Contact
          </div>
          <div className="relative leading-[13.99px] uppercase font-semibold">
            Privacy Policy
          </div>
        </div>
      </div>
      <div className="self-stretch bg-yellowgreen overflow-hidden flex flex-row py-6 px-0 items-center justify-center text-center text-base">
        <div className="relative leading-[19.68px]">
          <p className="m-0">© 2023 VIRGINIA EDUCATION ASSOCIATION</p>
          <p className="m-0">
            PAID FOR BY THE VEA FUND FOR CHILDREN AND PUBLIC EDUCATION
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
