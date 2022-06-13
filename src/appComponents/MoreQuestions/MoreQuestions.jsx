import React, { memo } from "react";
import StyledContainer from "../../sharedComponents/StyledContainer/StyledContainer";
import ContactCard from "../../sharedComponents/ContactCard/ContactCard";
import ComponentHeader from "../../sharedComponents/ComponentHeader/ComponentHeader";

const MoreQuestions = () => {
  return (
    <>
      <StyledContainer styles={{ maxWidth: "600px" }}>
        <div className="more_question_wrapper">
          <ComponentHeader heading="Still have a question?">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </ComponentHeader>
          <div className="contact_wrapper">
            <ContactCard
              contact="+66 8959888"
              description="Lorem ipsum dolor sit amet, consectetur"
            />
            <ContactCard
              contact="Support@service.com"
              description="Lorem ipsum dolor sit amet, consectetur"
            />
          </div>
        </div>
      </StyledContainer>
    </>
  );
};

export default memo(MoreQuestions);
