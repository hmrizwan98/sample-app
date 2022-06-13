import React, { memo } from "react";
import StyledContainer from "../../sharedComponents/StyledContainer/StyledContainer";
import GridContainer from "../../sharedComponents/GridContainer/GridContainer";
import image from "../../assets/images/png/image.png";
import StyledInput from "../../sharedComponents/StyledInput/StyledInput";
import StyledButton from "../../sharedComponents/StyledButton/StyledButton";
import immage from "../../assets/images/png/bgcircle.png";

const SearchArea = () => {
  return (
    <>
      <div className="area_wrapper">
        <img src={immage} alt="" className="bg_img" />
        <StyledContainer>
          <GridContainer image={image} imageClass="image_wrapper">
            <div className="area_box">
              <h1 className="heading-md">
                Find us in these <span className="bold">Area</span>
              </h1>
              <div className="styled_input_wrapper">
                <StyledInput
                  placeholder="Enter your area"
                  className="input_border"
                />
                <StyledButton>Search</StyledButton>
              </div>
            </div>
          </GridContainer>
        </StyledContainer>
      </div>
    </>
  );
};

export default memo(SearchArea);
