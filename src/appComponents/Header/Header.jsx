import React, { memo, useState } from "react";
import logo from "../../assets/images/svg/logo.svg";
import burger from "../../assets/images/svg/burger.svg";
import StyledContainer from "../../sharedComponents/StyledContainer/StyledContainer";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleModal = () => {};

  return (
    <>
      <StyledContainer styles={{ padding: "0px" }}>
        <div className="desktop_navigation">
          <div className="header_wrapper ">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="navigation">
              <ul>
                <li>Our App</li>
                <li>For Business</li>
                <li>About us</li>
                <li>English</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mobile_navigation">
          <div className="header_wrapper ">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="navigation">
              <img src={burger} alt="" onClick={() => setShowMenu(true)} />
            </div>
          </div>
        </div>
      </StyledContainer>

      {showMenu && <MobileMenu setShowMenu={setShowMenu} />}
    </>
  );
};

export default memo(Header);
