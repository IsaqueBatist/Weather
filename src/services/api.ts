import axios from 'axios';

const APIKEY: string = '78ab983725a24d118ad202504240508'
export const api = axios.create({
  baseURL: `http://api.weatherapi.com/v1`,
  params: {
    key: APIKEY
  }
});