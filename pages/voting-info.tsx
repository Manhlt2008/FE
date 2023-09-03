import type { NextPage } from "next";
import Header from "../components/header";
import ElectrionInformation from "../components/electrion-information";
import AreYouReady from "../components/are-you-ready";
import RequestYourVote from "../components/request-your-vote";
import Votes from "../components/votes";
import VoteInforSub from "../components/vote-infor-sub";
import FAQ from "../components/f-a-q";
import SignUp from "../components/sign-up";
import Footer from "../components/footer";

const VotingInfo: NextPage = () => {
  return (
    <div className="relative [background:linear-gradient(180deg,_#f6f8eb,_#8abb3e_12.88%)] w-full overflow-hidden flex flex-col items-center justify-start">
      <Header />
      <div className="self-stretch relative bg-c1818 h-0.5 overflow-hidden shrink-0 hidden md:flex" />
      <ElectrionInformation />
      <AreYouReady />
      <RequestYourVote />
      <Votes />
      <VoteInforSub />
      <FAQ />
      <SignUp />
      <Footer />
    </div>
  );
};

export default VotingInfo;
