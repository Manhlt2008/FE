import type { NextPage } from "next";
import Header from "../components/header";
import ContactContent from "../components/contact-content";
import SignUp from "../components/sign-up";
import Footer from "../components/footer";

const Contact: NextPage = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-start justify-start">
      <Header />
      <div className="self-stretch relative bg-c1818 h-0.5 overflow-hidden shrink-0 hidden md:flex" />
      <ContactContent />
      <SignUp />
      <Footer />
    </div>
  );
};

export default Contact;
