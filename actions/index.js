import axios from 'axios';

const ACCESS_KEY = '6ca82c417d79e942';
const BASE_URL = 'https://api.eatstreet.com/publicapi/v1/restaurant';

export const FETCH_RESTAURANT = 'FETCH_RESTAURANT';

export function fetchRestaurant(city = 'San Francisco') {

  const url = `${BASE_URL}/search?access-token=${ACCESS_KEY}&method=both&street-address=${city}`;
  const request = axios.get(url);

  return {
    type: FETCH_RESTAURANT,
    payload: request
  };

}
