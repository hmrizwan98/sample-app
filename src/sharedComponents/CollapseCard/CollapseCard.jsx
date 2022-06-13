import React, { memo } from "react";

const CollapseCard = (props) => {
  const { title, heading, description } = props;
  return (
    <>
      <details>
        <summary>{title}</summary>
        <div className="details_wrapper">
          <h4 className="heading-sm">{heading}</h4>
          <p>{description}</p>
        </div>
      </details>
    </>
  );
};

export default memo(CollapseCard);
