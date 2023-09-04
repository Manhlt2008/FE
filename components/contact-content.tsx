import type { NextPage } from "next";

const ContactContent: NextPage = () => {
  return (
    <div className="self-stretch bg-white flex flex-row flex-wrap py-[129px] px-[30px] items-start justify-center gap-[150px] text-left text-31xl text-c1818 font-open-sans md:flex-col md:gap-[50px] md:items-center md:justify-center md:pt-[50px] md:pb-[50px] md:box-border">
      <img
        className="relative rounded-[17.67px] w-[307.67px] h-[138px] object-cover hidden md:flex"
        alt=""
        src="/thumbnail-5@2x.png"
      />
      <div className="flex-1 overflow-hidden flex flex-col items-center justify-start gap-[60px] max-w-[525px] md:max-w-[960px] md:flex-[unset] md:self-stretch">
        <div className="self-stretch flex flex-col items-center justify-start gap-[23px]">
          <div className="self-stretch relative leading-[55px] md:text-center">
            Get In Touch!
          </div>
          <i className="self-stretch relative text-lg leading-[23px] font-light md:text-center">
            If you’d like to get in touch with us, please send us an email.
          </i>
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[8px] text-xl text-black md:items-center md:justify-start">
          <i className="self-stretch relative leading-[33px] font-light md:text-center">
            <p className="m-0">555-555-5555</p>
            <p className="m-0">email@email.com</p>
          </i>
          <img
            className="relative w-[123.37px] h-[21.86px]"
            alt=""
            src="/social-icons.svg"
          />
        </div>
      </div>
      <img
        className="flex-1 relative rounded-[17.67px] max-w-[481px] overflow-hidden h-[287px] object-cover md:hidden md:flex-[unset] md:self-stretch"
        alt=""
        src="/thumbnail-4@2x.png"
      />
    </div>
  );
};

export default ContactContent;
