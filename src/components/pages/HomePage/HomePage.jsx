import React, { useState, useEffect } from 'react';
import Input from '../../atoms/Input/Input';
import Select from '../../atoms/Select/Select';
import Card from '../../molecules/Card/Card';
import makeRequest from '../../../utils/axios';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [countries, setCountries] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [regions, setRegions] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await makeRequest('all');
      setCountries(data);
      setFilteredCountries(data);
      setIsLoading(false);
    };
    try {
      fetchData();
    } catch (error) {
      console.log('An error occured', error);
    }
  }, []);

  useEffect(() => {
    const uniqueRegions = [
      ...new Set(countries?.map((country) => country.region)),
    ].filter((uniqueRegion) => uniqueRegion !== '');

    setRegions(uniqueRegions);
  }, [countries]);

  useEffect(() => {
    setFilteredCountries(
      countries
        ?.filter((country) =>
          filter === '' ? country : country.region.toLowerCase() === filter,
        )
        .filter((country) => country.name.toLowerCase().includes(search)),
    );
  }, [countries, filter, search]);

  const handleChange = (e) => {
    setFilter(e.target.value.toLowerCase());
  };
  const handleSearch = async (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <div>
      <div className='main-content'>
        <div className='container'>
          <div className='main-content__filters'>
            <Input
              placeholder='Search for a country...'
              handleSearch={handleSearch}
            />
            <Select
              placeholder='Select Region'
              options={regions}
              handleChange={handleChange}
            />
          </div>
          {isLoading ? (
            <div className='noneData'>
              <lottie-player
                src='https://assets4.lottiefiles.com/packages/lf20_RiLwoG.json'
                background='rgba(0, 0, 0, 0)'
                speed='1'
                style={{ width: '300px', height: '300px' }}
                loop
                autoplay></lottie-player>
              <h4>Loading</h4>
            </div>
          ) : filteredCountries?.length === 0 ? (
            <div className='noneData'>
              <lottie-player
                src='https://assets4.lottiefiles.com/packages/lf20_RiLwoG.json'
                background='rgba(0, 0, 0, 0)'
                speed='1'
                style={{ width: '300px', height: '300px' }}
                loop
                autoplay></lottie-player>
              <h4>No Data Found. Try Searching for something else</h4>
            </div>
          ) : (
            <>
              <div className='grid'>
                {filteredCountries
                  ? filteredCountries.map((country) => (
                      <Link
                        to={`/${country.alpha2Code}`}
                        key={country.alpha2Code}>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
