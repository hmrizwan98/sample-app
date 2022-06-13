import React, { memo } from "react";

const Avatar = (props) => {
  const { image, name } = props;
  return (
    <>
      <div className="avatar_wrapper">
        <img src={image} alt="" />
        <p>{name}</p>
      </div>
    </>
  );
};

export default memo(Avatar);
