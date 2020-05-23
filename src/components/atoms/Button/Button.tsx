import React from 'react';
interface Button {
  btnStyle?: String;
  onClick?: Function;
}

const Button: React.FC = ({ btnStyle, children, icon, onClick }) => {
  return (
    <button onClick={onClick} className={btnStyle}>
      {icon ? (
        <span>
          <img src={icon} alt='icon' width='20px' />
        </span>
      ) : null}{' '}
      {children}
    </button>
  );
};

export default Button;
