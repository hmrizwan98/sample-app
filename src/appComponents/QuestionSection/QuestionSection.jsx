import React, { memo } from "react";
import CollapseCard from "../../sharedComponents/CollapseCard/CollapseCard";
import StyledContainer from "../../sharedComponents/StyledContainer/StyledContainer";
import { questionAnswer } from "../../utils/fakeData";
import ComponentHeader from "../../sharedComponents/ComponentHeader/ComponentHeader";

const QuestionSection = () => {
  return (
    <>
      <StyledContainer styles={{ maxWidth: "600px" }}>
        <div className="question_wrapper">
          <ComponentHeader heading="Got questions?">
            Perfect, we’ve got answers!
          </ComponentHeader>

          <div>
            {questionAnswer?.map((item) => (
              <CollapseCard
                title={item?.question}
                heading={item?.heading}
                description={item?.answer}
                key={item?.id}
              />
            ))}
          </div>
        </div>
      </StyledContainer>
    </>
  );
};

export default memo(QuestionSection);
