import React from 'react';
import Arrow from '../../../assets/arrow.svg';

interface SelectProps {
  placeholder: string;
  options: string[];
  handleChange(e: any): void;
}

const Select: React.FC<SelectProps> = ({
  placeholder,
  options,
  handleChange,
}) => {
  return (
    <div className='select'>
      <select onChange={(e) => handleChange(e)}>
        <option value=''>{placeholder}</option>
        {options?.map((option, index) => (
          <option key={index} value={option}>
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
