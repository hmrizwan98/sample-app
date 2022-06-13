import React, { memo } from "react";

const StyledInput = ({ className, placeholder }) => {
  return (
    <>
      <input
        type="text"
        className={`input_wrapper ${className}`}
        placeholder={placeholder}
      />
    </>
  );
};

export default memo(StyledInput);
