import React, { memo } from "react";
import ComponentHeader from "../../sharedComponents/ComponentHeader/ComponentHeader";
import StyledContainer from "../../sharedComponents/StyledContainer/StyledContainer";
import appleStore from "../../assets/images/svg/appleStore.svg";
import googlePlayStore from "../../assets/images/svg/googlePlayStore.svg";

const DownloadApp = () => {
  return (
    <>
      <div className="download_wrapper">
        <StyledContainer styles={{ maxWidth: "600px" }}>
          <ComponentHeader heading="Ready to" headingBold="Get the app">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </ComponentHeader>
          <div className="get_app_link">
            <img src={appleStore} alt="" />
            <img src={googlePlayStore} alt="" />
          </div>
        </StyledContainer>
      </div>
    </>
  );
};

export default memo(DownloadApp);
