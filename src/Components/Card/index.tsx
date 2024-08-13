import React from 'react';
import sun from '../../assets/icons/Weather-Icons-IOS7-Style-PIXEDEN/SVG/sun.svg';
import {
  City,
  CurrentContainer,
  CurrentWeather,
  Data,
  ForecastContainer,
  ImageContainer,
  MainContainer,
  Temperature
} from './style';
const Card = () => {
  return (
    <MainContainer>
      <CurrentContainer>
        <CurrentWeather>
          <City>Itu</City>
          <Temperature>16.1 °C</Temperature>
          <Data>2024-08-13</Data>
          <ImageContainer>
            <img src={sun} alt="sunset"  style={{filter: 'invert(1)'}} width="150"/>
          </ImageContainer>
        </CurrentWeather>
      </CurrentContainer>
      <ForecastContainer>

      </ForecastContainer>
    </MainContainer>
  );
}
export default Card