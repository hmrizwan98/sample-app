import React, { memo } from "react";

const StyledButton = ({ children }) => {
  return (
    <>
      <button className="btn_styled">{children}</button>
    </>
  );
};

export default memo(StyledButton);
