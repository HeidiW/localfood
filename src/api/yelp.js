import axios from 'axios';

export default axios.create({
baseURL: 'https://api.yelp.com/v3/businesses',
headers: {
    Authorization: 'Bearer VwHfG9wV-9fC232KhoXT1w3TGy_tl0khaUWiizXaCS6ojhmtJqapFNYHRIshCSGEcD3V3b6DmPEHMpjSDdmjvJ7UZEVh3PAKWNKg_PY39dTzfUqWWA-JmZ2cKKo5XnYx'
  }
});
