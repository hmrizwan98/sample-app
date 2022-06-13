import React, { memo } from "react";
import GridContainer from "../../sharedComponents/GridContainer/GridContainer";
import StyledContainer from "../../sharedComponents/StyledContainer/StyledContainer";
import freshMart from "../../assets/images/png/freshMart.png";
import ProductDescription from "../../sharedComponents/ProductDescription/ProductDescription";
import { productDescription } from "../../utils/fakeData";

const DescriptionSection = () => {
  return (
    <>
      <StyledContainer>
        <GridContainer
          image={freshMart}
          className="reverse"
          backgroundImageClass="background_image">
          <div className="drscription_wrapper">
            {productDescription?.map((item) => (
              <ProductDescription
                title={item?.title}
                description={item?.description}
                key={item?.id}
              />
            ))}
          </div>
        </GridContainer>
      </StyledContainer>
    </>
  );
};

export default memo(DescriptionSection);
