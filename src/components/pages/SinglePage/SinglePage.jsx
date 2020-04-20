import React, { useState, useEffect } from 'react';
import makeRequest from '../../../utils/axios';
import back from '../../../assets/back.svg';
import Button from '../../atoms/Button/Button';
import Header from '../../atoms/Header/Header';
import { Link } from 'react-router-dom';

const SinglePage = ({ match }) => {
  const [countryDetail, setCountryDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const countryCode = match.params.countryCode;
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await makeRequest(`alpha/${countryCode}`, {
        params: { fullText: true },
      });
      setCountryDetail(data);
      setIsLoading(false);
    };
    try {
      fetchData();
    } catch (error) {
      console.log('An error occured', error);
    }
  }, [countryCode]);

  return (
    <div className='main-content'>
      <div className='container '>
        <Button icon={back} btnStyle={`btn--primary`}>
          Back
        </Button>
        <div>
          <img src={countryDetail?.flag} alt={countryCode.name} />
        </div>
        <div>
          <Header headerSize='md'>{countryDetail?.name}</Header>
          <div>
            <div>
              <div>
                <Header headerSize='sm'>Native Name:</Header>
                {` ${countryDetail?.nativeName}`}
              </div>
              <div>
                <Header headerSize='sm'>Population:</Header>
                {` ${countryDetail?.population}`}
              </div>
              <div>
                <Header headerSize='sm'>Region:</Header>
                {` ${countryDetail?.region}`}
              </div>
              <div>
                <Header headerSize='sm'>Capital:</Header>
                {` ${countryDetail?.capital}`}
              </div>
            </div>
            <div>
              <div>
                <Header headerSize='sm'>Numeric Code:</Header>
                {` ${countryDetail?.numericCode}`}
              </div>
              <div>
                <Header headerSize='sm'>Currencies:</Header>
                {countryDetail?.currencies?.map(
                  (currency) => `${currency.name} `,
                )}
              </div>
              <div>
                <Header headerSize='sm'>Languages:</Header>
                {countryDetail?.languages?.map(
                  (language) => `${language.name} `,
                )}
              </div>
            </div>
          </div>
          <div>
            <Header headerSize='md'>Border Countries:</Header>
            <ul>
              {countryDetail?.borders?.length === 0
                ? 'None'
                : countryDetail?.borders?.map((border) => (
                    <li key={border}>
                      <Button btnStyle='btn--primary'>{border}</Button>
                    </li>
                  ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
