import React, { Component } from 'react';

interface HeaderProps {
  headerSize: String;
  children: Component;
}

const Header: React.FC<HeaderProps> = ({ children, headerSize }) => {
  return <h1 className={`header--${headerSize}`}>{children}</h1>;
};

export default Header;
