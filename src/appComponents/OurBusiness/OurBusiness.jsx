import React, { memo } from "react";
import StyledContainer from "../../sharedComponents/StyledContainer/StyledContainer";
import ComponentHeader from "../../sharedComponents/ComponentHeader/ComponentHeader";
import StyledInput from "../../sharedComponents/StyledInput/StyledInput";
import StyledButton from "../../sharedComponents/StyledButton/StyledButton";

const OurBusiness = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <>
      <div className="business_wrapper">
        <StyledContainer styles={{ maxWidth: "600px", ...containerStyle }}>
          <ComponentHeader heading="WeFresh" headingBold="for business">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ComponentHeader>
          <div className="styled_input_wrapper">
            <StyledInput placeholder="Enter phone number" />
            <StyledButton>Send</StyledButton>
          </div>
        </StyledContainer>
      </div>
    </>
  );
};

export default memo(OurBusiness);
