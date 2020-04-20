import React, { useState, useEffect } from 'react';
import makeRequest from '../../../utils/axios';
import back from '../../../assets/back.svg';
import Button from '../../atoms/Button/Button';
import Header from '../../atoms/Header/Header';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const SinglePage = ({ match, history }) => {
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
        <Button
          icon={back}
          btnStyle={`btn--primary`}
          onClick={() => history.goBack()}>
          Back
        </Button>
        <div className='country'>
          <div>
            {isLoading ? (
              <Skeleton height={400} />
            ) : (
              <img src={countryDetail?.flag} alt={countryCode.name} />
            )}
          </div>
          <div>
            <Header headerSize='lg'>
              {isLoading ? <Skeleton width={300} /> : countryDetail?.name}
            </Header>
            <div className='country__detail'>
              {isLoading ? (
                <Skeleton width={600} height={300} />
              ) : (
                <>
                  <div>
                    <div className='country__text'>
                      <Header headerSize='sm'>Native Name</Header>
                      {`: ${countryDetail?.nativeName}`}
                    </div>

                    <div className='country__text'>
                      <Header headerSize='sm'>Population</Header>
                      {`: ${countryDetail?.population}`}
                    </div>
                    <div className='country__text'>
                      <Header headerSize='sm'>Region</Header>
                      {`: ${countryDetail?.region}`}
                    </div>
                    <div className='country__text'>
                      <Header headerSize='sm'>Capital</Header>
                      {`: ${countryDetail?.capital}`}
                    </div>
                  </div>
                  <div>
                    <div className='country__text'>
                      <Header headerSize='sm'>Numeric Code</Header>
                      {`: ${countryDetail?.numericCode}`}
                    </div>
                    <div className='country__text'>
                      <Header headerSize='sm'>Currencies</Header>
                      {countryDetail?.currencies?.map(
                        (currency) => `: ${currency.name} `,
                      )}
                    </div>
                    <div className='country__text'>
                      <Header headerSize='sm'>Languages</Header>
                      {countryDetail?.languages?.map(
                        (language) => `: ${language.name} `,
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className='country__extra'>
              {isLoading ? (
                <Skeleton width={500} height={150} />
              ) : (
                <>
                  <Header headerSize='sm'>Border Countries</Header>:
                  <ul className='country__buttons'>
                    {countryDetail?.borders?.length === 0
                      ? 'None'
                      : countryDetail?.borders?.map((border) => (
                          <li key={border}>
                            <Link to={`/${border.toLowerCase()}`}>
                              <Button btnStyle='btn--primary'>{border}</Button>
                            </Link>
                          </li>
                        ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
