import React, { memo } from "react";

const ComponentHeader = (props) => {
  const { heading, headingBold, children } = props;
  return (
    <>
      <div className="question_heading">
        <h4 className="heading-md">
          {heading} <span className="bold"> {headingBold}</span>
        </h4>
        <p className="answers">{children}</p>
      </div>
    </>
  );
};

export default memo(ComponentHeader);
