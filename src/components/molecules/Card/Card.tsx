import React from 'react';
import Header from '../../atoms/Header/Header';

interface CardProps {
  image: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}
const Card: React.FC<CardProps> = ({
  image,
  name,
  population,
  region,
  capital,
}) => {
  return (
    <div className='card'>
      <img src={image} alt={`${name} flag`} className='card__image' />
      <div className='card__body'>
        <div className='card__body__title'>
          <Header headerSize='md'>{name}</Header>
        </div>
        <div className='card__body__text'>
          <Header headerSize='sm'>Population</Header> : <p>{population}</p>
        </div>
        <div className='card__body__text'>
          <Header headerSize='sm'>Region</Header> : <p>{region}</p>
        </div>
        <div className='card__body__text'>
          <Header headerSize='sm'>Capital</Header> : <p>{capital}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
