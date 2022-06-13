import React, { memo } from "react";
import StyledContainer from "../../sharedComponents/StyledContainer/StyledContainer";
import footerLogo from "../../assets/images/svg/footerLogo.svg";
import apple from "../../assets/images/svg/apple.svg";
import playStore from "../../assets/images/svg/googleplayBlack.svg";

const Footer = () => {
  return (
    <>
      <div className="footer_wrapper">
        <StyledContainer>
          <div className="footer_section">
            <div className="flexex_width">
              <img src={footerLogo} alt="" />
            </div>
            <div className="flexex_width">
              <h4>SERVICE AREA</h4>
              <ul>
                <li>lorem ippsum dol</li>
                <li>Psum</li>
                <li>Sum dolor</li>
                <li>Lorem</li>
              </ul>
            </div>
            <div className="flexex_width">
              <h4>ABOUT</h4>
              <ul>
                <li>lorem ippsum dol</li>
                <li>Psum</li>
                <li>Sum dolor</li>
                <li>Lorem</li>
              </ul>
            </div>
            <div className="flexex_width">
              <h4>HELP</h4>
              <ul>
                <li>lorem ippsum dol</li>
                <li>Psum</li>
                <li>Sum dolor</li>
                <li>Lorem</li>
              </ul>
            </div>
            <div className="flexex_width txt_center">
              <h4>Available on</h4>
              <div className="store_link">
                <img src={apple} alt="" />
                <img src={playStore} alt="" />
              </div>
            </div>
          </div>
        </StyledContainer>
        <div className="copy_right">
          <StyledContainer styles={{ padding: "0px" }}>
            <p>© 2020 WeFresh. All Rights Reserved.</p>
          </StyledContainer>
        </div>
      </div>
    </>
  );
};

export default memo(Footer);
