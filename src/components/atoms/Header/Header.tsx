import React from 'react';

interface HeaderProps {
  headerSize: String;
  children?: string;
}

const Header: React.FC<HeaderProps> = ({ children, headerSize }) => {
  return <h1 className={`header--${headerSize}`}>{children}</h1>;
};

export default Header;
