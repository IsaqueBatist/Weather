import React from 'react';
import ArrowIcon from "../../assets/icons/other/arrow-prev-svgrepo-com.svg"
import {
  Arrow,
  City,
  CurrentContainer,
  CurrentWeather,
  Data,
  ForecastContainer,
  ForecastItem,
  ForecastTitle,
  ForecastWeather,
  Image,
  MainContainer,
  Temperature
} from './style';
import { icons } from '../../resources/Icons/weathericon';
import { IMainData } from './type';
const Card = ({ data, onClick }: IMainData) => {

  const conditionText = data?.current.image;

  const handleGetFormatedData = (current: boolean): string => {
    if (data && current) {
      const dateString = data?.current.localtime;
      const date = new Date(dateString);
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${month}-${day}`;
    } else if (data && !current) {
      const dateString = data?.forecast.date;
      const [year, month, day] = dateString.split('-');
      return `${month}-${day}`;
    } else {
      return '0-0'
    }
  }
  return (
    <MainContainer>
      <CurrentContainer>
        <Arrow src={ArrowIcon} alt="arrowIocn" onClick={onClick} />
        <CurrentWeather>
          <Image src={data?.current.is_day === 1 ? icons[conditionText.replace(/\s+/, "")]?.day : icons[conditionText.replace(/\s+/, "")]?.night} alt={data?.current.image} />
          <City>{data?.current.city}</City>
          <Temperature>{data?.current.tempC}</Temperature>
          <Data>{handleGetFormatedData(true)}</Data>
        </CurrentWeather>
      </CurrentContainer>
      <ForecastContainer>
        <ForecastWeather>
          <ForecastTitle>
            <p>Forecast</p>
          </ForecastTitle>
          <ForecastItem>

            <li><p><b>Date:</b> {handleGetFormatedData(false)}</p></li>
            <li><p><b>Max Temp:</b> {data?.forecast.maxTemp} °C</p></li>
            <li><p><b>Min Temp:</b> {data?.forecast.minTemp} °C</p></li>
            <li><p><b>Condition:</b> {data?.forecast.condition}</p></li>
            <li><p><b>Max WindSpeed:</b> {data?.forecast.maxWindSpeed} km/h</p></li>
            <li><p><b>Sunrise:</b> {data?.forecast.sunrise}</p></li>
            <li><p><b>Sunset:</b> {data?.forecast.sunset}</p></li>

          </ForecastItem>
        </ForecastWeather>
      </ForecastContainer>
    </MainContainer>
  );
}
export default Card