import React from 'react';
import {
  City,
  CurrentContainer,
  CurrentWeather,
  Data,
  ForecastContainer,
  ForecastItem,
  ForecastTitle,
  ForecastWeather,
  ImageContainer,
  MainContainer,
  Temperature
} from './style';
import { icons } from '../../resources/Icons/weathericon';
import { IMainData } from './type';
const Card = ({data}: IMainData) => {
  const conditionText = data?.current.image;
  return (
    <MainContainer>
      <CurrentContainer>
        <CurrentWeather>
          <City>{data?.current.city}</City>
          <Temperature>{data?.current.tempC}</Temperature>
          <Data>{data?.current.localtime}</Data>
          <ImageContainer>
            <img src={data?.current.is_day === 1 ? icons[conditionText]?.day : icons[conditionText]?.night} alt="sunset" style={{ filter: 'invert(1)' }} width="150" />
          </ImageContainer>
        </CurrentWeather>
      </CurrentContainer>
      <ForecastContainer>
        <ForecastWeather>
          <ForecastTitle>
            <p>Forecast</p>
          </ForecastTitle>
          <ForecastItem>
            <p><b>Date:</b>{data?.forecast.date}</p>
            <p><b>Max Temp:</b>{data?.forecast.maxTemp} °C</p>
            <p><b>Min Temp:</b>{data?.forecast.minTemp} °C</p>
            <p><b>Condition:</b>{data?.forecast.condition}</p>
            <p><b>Max WindSpeed:</b> {data?.forecast.maxWindSpeed} km/h</p>
            <p><b>Sunrise:</b> {data?.forecast.sunrise}</p>
            <p><b>Sunset:</b> {data?.forecast.sunset}</p>
          </ForecastItem>
        </ForecastWeather>
      </ForecastContainer>
    </MainContainer>
  );
}
export default Card