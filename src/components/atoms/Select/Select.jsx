import React from 'react';
import Arrow from '../../../assets/arrow.svg';

const Select = ({ placeholder, ...props }) => {
  return (
    <div className='select'>
      <select>
        <option value>{placeholder}</option>
        <option value>{placeholder}</option>
        <option value>{placeholder}</option>
      </select>

      <span className='arrow'>
        <img src={Arrow} alt='arrow' />
      </span>
    </div>
  );
};

export default Select;
