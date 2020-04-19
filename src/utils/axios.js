import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2/',
});

const makeRequest = (url, options = { method: 'GET' }) => {
  return apiInstance({
    url,
    method: options.method,
    data: options.body,
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
  }).then((response) => response.data);
};

export default makeRequest;
