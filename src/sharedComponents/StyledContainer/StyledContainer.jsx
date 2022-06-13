import React, { memo } from "react";

const StyledContainer = (props) => {
  const { children, className, styles } = props;
  return (
    <>
      <div className="container_wrapper" style={styles}>
        {children}
      </div>
    </>
  );
};

export default memo(StyledContainer);
