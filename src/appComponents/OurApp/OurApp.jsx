import React, { memo } from "react";
import Header from "../Header/Header";
import GridContainer from "../../sharedComponents/GridContainer/GridContainer";
import MobileMenu from "../MobileMenu/MobileMenu";
import StyledInput from "../../sharedComponents/StyledInput/StyledInput";
import StyledButton from "../../sharedComponents/StyledButton/StyledButton";
import iphoneblack from "../../assets/images/png/iphone_black.png";
import StyledContainer from "../../sharedComponents/StyledContainer/StyledContainer";
import apple from "../../assets/images/svg/apple.svg";
import playStore from "../../assets/images/svg/googleplay.svg";

const OurApp = () => {
  return (
    <>
      <div className="app_wrapper">
        <Header />
        <StyledContainer>
          <GridContainer image={iphoneblack}>
            <div className="content_wrapper">
              <h1 className="heading-lg font_weight_md">The smarter way</h1>
              <h1 className="heading-lg font-weight">to order your food</h1>
              <div className="styled_input_wrapper">
                <StyledInput placeholder="Enter phone number" />
                <StyledButton>Send</StyledButton>
              </div>
              <p>Available on</p>
              <div className="store_link">
                <img src={apple} alt="" />
                <img src={playStore} alt="" />
              </div>
            </div>
          </GridContainer>
        </StyledContainer>
      </div>
    </>
  );
};

export default memo(OurApp);
