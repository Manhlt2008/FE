import type { NextPage } from "next";
import Header from "../components/header";
import Welcome from "../components/welcome";
import RaceName from "../components/race-name";
import SignUp from "../components/sign-up";
import Footer from "../components/footer";

const PersonalizedBallot: NextPage = () => {
  return (
    <div className="relative w-full flex flex-col items-start justify-start">
      <Header />
      <Welcome />
      <RaceName />
      <SignUp />
      <Footer />
    </div>
  );
};

export default PersonalizedBallot;
