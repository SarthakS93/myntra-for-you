import React from "react";
import "./Header.scss";
import Logo from "../../assets/icons/myntra-icon.png";
import { socialLinks, menulinks, navLinks } from "../../data/links";
import { purple } from "../../constants/Colors";

const Header = () => {
  return (
    <header className="header">
      <div className="top-section">
        <div className="logo">
          <img src={Logo} alt="Logo" />
          <p>Myntra</p>
        </div>
        <div className="social-links">
          {/* {socialLinks.map(({ Icon, id, size }, index) => (
            <div className="icon" key={index}>
              <Icon color={purple} size={size} />
            </div>
          ))} */}
          <h2>Myntra For Earth</h2>
        </div>
        <div className="extra-links">
          {menulinks.map(({ image, id }, index) => (
            <img src={image} alt={id} key={index} />
          ))}
        </div>
      </div>
      <div className="bottom-section">
        {navLinks.map(({ name, path }, index) => (
          <p className="link" key={index}>
            {name}
          </p>
        ))}
      </div>
    </header>
  );
};

export default Header;
