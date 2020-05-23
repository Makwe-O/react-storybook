import React from 'react';
import Search from '../../../assets/search.svg';

interface InputProps {
  placeholder: string;
  value: string;
  handleSearch(): void;
}

const Input: React.FC<InputProps> = ({ placeholder, value, handleSearch }) => {
  return (
    <span className='input__container'>
      <span className='input__icon'>
        <img src={Search} alt='icon' width='15px' />
      </span>
      <input
        className='input__inner'
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={handleSearch}
      />
    </span>
  );
};

export default Input;
