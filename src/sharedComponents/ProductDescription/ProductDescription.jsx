import React, { memo } from "react";

const ProductDescription = (props) => {
  const { description, title } = props;
  return (
    <>
      <div className="content_block">
        <h4 className="heading-sm">{title}</h4>
        <p>{description}</p>
      </div>
    </>
  );
};

export default memo(ProductDescription);
