export interface IMainData{
  data?: IData
}

interface IData{
  current:ICurrent,
  forecast: IForecast
}

interface ICurrent{
  city: string;
  tempC: number;
  localtime: string;
  is_day: number;
  image: any;
}

interface IForecast{
  date: string;
  maxTemp: number;
  minTemp: number;
  condition: string;
  maxWindSpeed: number;
  sunrise: string;
  sunset: string;
}