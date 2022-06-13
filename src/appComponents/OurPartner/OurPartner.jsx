import React, { memo } from "react";
import StyledContainer from "../../sharedComponents/StyledContainer/StyledContainer";
import partner from "../../assets/images/png/partners.png";
import sevenEleven from "../../assets/images/svg/sevenEleven.svg";
import trueYou from "../../assets/images/svg/trueYou.svg";
import trueCoffee from "../../assets/images/svg/trueCoffee.svg";
import makro from "../../assets/images/svg/makro.svg";
import cpFreshmart from "../../assets/images/svg/cpFreshmart.svg";

const OurPartner = () => {
  return (
    <>
      <div>
        <StyledContainer>
          <div className="partners">
            <div className="description_wrapper">
              <img src={partner} alt="" />
              <div className="content">
                <h4 className="heading-md">
                  Our <span className="bold">Partners</span>{" "}
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  sed do eiusmod.
                </p>
              </div>
            </div>
            <div className="logo_wrapper">
              <img src={sevenEleven} alt="" className="seven_eleven" />
              <img src={trueCoffee} alt="" className="true_coffee" />
              <img src={trueYou} alt="" className="true_you" />
              <img src={makro} alt="" className="makro" />
              <img src={cpFreshmart} alt="" className="fresh_mart" />
            </div>
          </div>
        </StyledContainer>
      </div>
    </>
  );
};

export default memo(OurPartner);
