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
const Card = () => {
  return (
    <MainContainer>
      <CurrentContainer>
        <CurrentWeather>
          <City>Itu</City>
          <Temperature>16.1</Temperature>
          <Data>2024-08-13</Data>
          <ImageContainer>
            <img src={icons.Sunny?.day} alt="sunset"  style={{filter: 'invert(1)'}} width="150"/>
          </ImageContainer>
        </CurrentWeather>
      </CurrentContainer>
      <ForecastContainer>
        <ForecastWeather>
          <ForecastTitle>
            <p>Forecast</p>
          </ForecastTitle>
          <ForecastItem>
            <p><b>Date:</b> 2024-08-13</p>
            <p><b>Max Temp:</b> 18.6 °C</p>
            <p><b>Min Temp:</b> 7.7 °C</p>
            <p><b>Condition:</b> Sunny</p>
            <p><b>Max WindSpeed:</b> 23 km/h</p>
            <p><b>Sunrise:</b> 06:36 AM</p>
            <p><b>Sunset:</b> 05:53 PM</p>
          </ForecastItem>
        </ForecastWeather>
      </ForecastContainer>
    </MainContainer>
  );
}
export default Card