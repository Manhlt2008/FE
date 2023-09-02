import type { NextPage } from "next";
import Header from "../components/header";
import PrivacyContent from "../components/privacy-content";
import SignUp from "../components/sign-up";
import Footer from "../components/footer";

const Policy: NextPage = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-center justify-center">
      <Header />
      <PrivacyContent />
      <SignUp />
      <Footer />
    </div>
  );
};

export default Policy;
