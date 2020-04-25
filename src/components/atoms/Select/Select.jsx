import React from 'react';
import Arrow from '../../../assets/arrow.svg';

const Select = ({ placeholder, options, handleChange }) => {
  return (
    <div className='select'>
      <select onChange={(e) => handleChange(e)}>
        <option value='all'>{placeholder}</option>
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <span className='arrow'>
        <img src={Arrow} alt='arrow' />
      </span>
    </div>
  );
};

export default Select;
