import React, { useState, useEffect } from 'react';
import Header from '../../atoms/Header/Header';
import Moon from '../../../assets/moon.svg';
import Sun from '../../../assets/sun.svg';
import { Link } from 'react-router-dom';
const Nav: React.FC = () => {
  const isLightModeExist = localStorage.getItem('isLightMode');
  const [moon, setMoon] = useState(false);
  const switchMode = (): void => {
    const checkMode = localStorage.getItem('isLightMode');
    if (checkMode === 'light') {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('isLightMode', 'dark');
      setMoon(false);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('isLightMode', 'light');
      setMoon(true);
    }
  };

  useEffect(() => {
    if (isLightModeExist === null) {
      localStorage.setItem('isLightMode', 'light');
      document.documentElement.setAttribute('data-theme', 'light');
      setMoon(true);
      return;
    } else if (isLightModeExist === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      setMoon(true);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      setMoon(false);
    }
  }, [isLightModeExist]);
  return (
    <nav className='nav'>
      <div className='container nav__inner'>
        <Header headerSize={'lg'}>
          <Link to='/'>Where in the world?</Link>
        </Header>

        <img
          src={moon ? Moon : Sun}
          alt={moon ? 'moon icon' : 'sun icon'}
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
