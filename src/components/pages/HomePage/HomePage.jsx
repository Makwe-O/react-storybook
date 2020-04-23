import React, { useState, useEffect } from 'react';
import Input from '../../atoms/Input/Input';
import Select from '../../atoms/Select/Select';
import Card from '../../molecules/Card/Card';
import makeRequest from '../../../utils/axios';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [countries, setCountries] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await makeRequest('all');
      setCountries(data);
    };
    try {
      fetchData();
    } catch (error) {
      console.log('An error occured', error);
    }
  }, []);
  return (
    <div>
      <div className='main-content'>
        <div className='container'>
          <div className='main-content__filters'>
            <Input placeholder='Search for a country...' />{' '}
            <Select placeholder='Select Region' />
          </div>
          <div className='grid'>
            {countries
              ? countries.map((country) => (
                  <Link to={`/${country.alpha2Code}`} key={country.alpha2Code}>
                    <Card
                      name={country.name}
                      image={country.flag}
                      capital={country.capital}
                      population={country.population}
                      region={country.region}
                    />
                  </Link>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
