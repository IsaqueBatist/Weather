import axios from 'axios';

const APIKEY: string = process.env.REACT_APP_API_KEY!;
console.log(APIKEY)

export const api = axios.create({
  baseURL: `http://api.weatherapi.com/v1`,
  params: {
    key: APIKEY
  }
});