import type { NextPage } from "next";
import Header from "../components/header";
import TheVirginiaVoterGuide from "../components/the-virginia-voter-guide";
import GuideVideo from "../components/guide-video";
import AboutUsContent2 from "../components/about-us-content2";
import Donate from "../components/donate";
import SignUp from "../components/sign-up";
import Footer from "../components/footer";

const AboutUs: NextPage = () => {
  return (
    <div className="relative [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.95)_1.07%,_#8dbd43_20.95%)] w-full overflow-hidden flex flex-col items-center justify-start">
      <Header />
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
