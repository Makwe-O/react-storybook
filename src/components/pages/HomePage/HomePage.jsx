import React from 'react';
import Input from '../../atoms/Input/Input';
import Card from '../../molecules/Card/Card';

const HomePage = () => {
  return (
    <div>
      <div className='main-content'>
        <div className='container'>
          <Input placeholder='Search for a country...' />
          <div className='grid'>
            <Card
              name='Nigeria'
              image={
                'https://res.cloudinary.com/dnavbc7ny/image/upload/v1571018074/star%20wars/starship-3.jpg'
              }
            />
            <Card
              name='Nigeria'
              image={
                'https://res.cloudinary.com/dnavbc7ny/image/upload/v1571018074/star%20wars/starship-3.jpg'
              }
            />
            <Card
              name='Nigeria'
              image={
                'https://res.cloudinary.com/dnavbc7ny/image/upload/v1571018074/star%20wars/starship-3.jpg'
              }
            />
            <Card
              name='Nigeria'
              image={
                'https://res.cloudinary.com/dnavbc7ny/image/upload/v1571018074/star%20wars/starship-3.jpg'
              }
            />
            <Card
              name='Nigeria'
              image={
                'https://res.cloudinary.com/dnavbc7ny/image/upload/v1571018074/star%20wars/starship-3.jpg'
              }
            />
            <Card
              name='Nigeria'
              image={
                'https://res.cloudinary.com/dnavbc7ny/image/upload/v1571018074/star%20wars/starship-3.jpg'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
