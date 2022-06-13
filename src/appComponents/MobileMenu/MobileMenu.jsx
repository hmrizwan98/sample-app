import React, { memo } from "react";
import logo from "../../assets/images/svg/logo.svg";
import close from "../../assets/images/svg/close.svg";
import StyledButton from "../../sharedComponents/StyledButton/StyledButton";

const MobileMenu = ({ setShowMenu }) => {
  return (
    <>
      <div className="mobile_menu_wrapper">
        <div className="logo_wrapper">
          <img src={logo} alt="" />
          <img src={close} alt="" onClick={() => setShowMenu(false)} />
        </div>
        <div className="mobile_navigation">
          <hr />
          <ul>
            <li>Our App</li>
            <li>For Business</li>
            <li>About us</li>
            <li>English</li>
          </ul>
        </div>
        <StyledButton>Sign up</StyledButton>
      </div>
    </>
  );
};

export default memo(MobileMenu);
