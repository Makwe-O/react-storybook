import React from "react";

const Header = ({ children, headerSize }) => {
  return <h1 className={`header--${headerSize}`}>{children}</h1>;
};

export default Header;
