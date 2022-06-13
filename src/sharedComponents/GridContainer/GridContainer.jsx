import React, { memo } from "react";

const GridContainer = (props) => {
  const { children, className, image, backgroundImageClass, imageClass } =
    props;
  return (
    <>
      <div className={`grid_container_wrapper ${className}`}>
        <div className="flex_cell">{children}</div>
        <div className={`flex_cell align_center ${backgroundImageClass}`}>
          <img src={image} alt="" className={imageClass} />
        </div>
      </div>
    </>
  );
};

export default memo(GridContainer);
