import React, { memo } from "react";

const ContactCard = (props) => {
  const { contact, description } = props;
  return (
    <>
      <div className="contact_card_wrapper">
        <h4>{contact}</h4>
        <p>{description}</p>
      </div>
    </>
  );
};

export default memo(ContactCard);
