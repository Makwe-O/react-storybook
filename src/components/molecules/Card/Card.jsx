import React from 'react';
import Header from '../../atoms/Header/Header';
const Card = ({ image, name }) => {
  return (
    <div className='card'>
      <img src={image} alt={name} className='card__image' />
      <div className='card__body'>
        <Header headerSize='md'>{name}</Header>
      </div>
    </div>
  );
};

export default Card;
