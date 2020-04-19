import React, { useState } from 'react';
import Header from '../../atoms/Header/Header';
import Moon from '../../../assets/moon.svg';
import { Link } from 'react-router-dom';
const Nav = () => {
  const [lightMode, setLightMode] = useState(false);
  const switchMode = () => {
    setLightMode(!lightMode);
    if (lightMode === true) {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  };
  return (
    <nav className='nav'>
      <div className='container nav__inner'>
        <Header headerSize={'lg'}>
          <Link to='/'>Where in the world?</Link>
        </Header>

        <img
          src={Moon}
          alt='moon icon'
          width={30}
          onClick={() => {
            switchMode();
          }}
        />
      </div>
    </nav>
  );
};

export default Nav;
