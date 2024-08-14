import axios from "axios";

const KEY = process.env.REACT_APP_API_KEY;
export const api = axios.create({
  baseURL: "http://api.weatherapi.com/v1",
  params: {
    key: KEY
  }
});