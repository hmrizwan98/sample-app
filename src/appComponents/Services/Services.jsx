import React, { memo } from "react";
import StyledContainer from "../../sharedComponents/StyledContainer/StyledContainer";
import Avatar from "../Avatar/Avatar";
import { services } from "../../utils/fakeData";

const Services = () => {
  return (
    <>
      <StyledContainer>
        <div className="services_wrapper">
          <div className="heading-md services_heading">
            <p>
              We’ve more <span className="bold">services</span>
            </p>
          </div>
          <div className="service_item">
            {services.map((item) => (
              <Avatar name={item?.name} image={item?.icon} key={item?.id} />
            ))}
          </div>
        </div>
      </StyledContainer>
    </>
  );
};

export default memo(Services);
