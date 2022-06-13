import React from "react";
import DescriptionSection from "../../appComponents/DescriptionSection/DescriptionSection";
import DownloadApp from "../../appComponents/DownloadApp/DownloadApp";
import Footer from "../../appComponents/Footer/Footer";
import MoreQuestions from "../../appComponents/MoreQuestions/MoreQuestions";
import OurApp from "../../appComponents/OurApp/OurApp";
import OurBusiness from "../../appComponents/OurBusiness/OurBusiness";
import OurPartner from "../../appComponents/OurPartner/OurPartner";
import QuestionSection from "../../appComponents/QuestionSection/QuestionSection";
import SearchArea from "../../appComponents/SearchArea/SearchArea";
import Services from "../../appComponents/Services/Services";

const Home = () => {
  return (
    <>
      <div className="home_wrapper">
        <OurApp />
        <Services />
        <DescriptionSection />
        <SearchArea />
        <OurPartner />
        <QuestionSection />
        <MoreQuestions />
        <DownloadApp />
        <OurBusiness />
        <Footer />
      </div>
    </>
  );
};

export default Home;
