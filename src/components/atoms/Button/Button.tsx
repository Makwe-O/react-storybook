import React from 'react';
interface ButtonProps {
  btnStyle: string;
  onClick(): void;
  icon: string;
}

const Button: React.FC<ButtonProps> = ({
  btnStyle,
  children,
  icon,
  onClick,
}) => {
  return (
    <button className={btnStyle}>
      {icon ? (
        <span>
          <img src={icon} alt='icon' width='20px' />
        </span>
      ) : null}
      {children}
    </button>
  );
};

export default Button;
