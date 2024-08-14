import styled from "styled-components";
import Celcius from "../../assets/icons/Weather-Icons-IOS7-Style-PIXEDEN/SVG/degree-celcius.svg"
export const MainContainer = styled.div`
  background-color: #00000014;
  width: 70vw;
  height: 70vh;
  border-radius: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
`

export const CurrentContainer = styled.div`
  width: 50%;
  height: 100%;
`
export const CurrentWeather = styled.div`
  padding: 7rem 0 0 5rem;
`

export const City = styled.p`
  font-size: 7rem;
  font-weight: 600;
`

export const Temperature = styled.p`
  font-size: 9.6rem;
  font-weight: 600;
  &::after{
    content:' ';
    width: 90px;
    height: 90px;
    background: url(${Celcius}) no-repeat;
    background-size: contain;
    filter: invert(1);
    display: inline-block;
  }
`

export const Data = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  margin-left: 1rem;
`

export const ImageContainer = styled.div`
  width:100%;
  display: flex;
  margin: 2rem 0 0 2rem;
  justify-content: flex-start;
  align-items: center;
`

export const ForecastContainer = styled.div`
  width:50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const ForecastWeather = styled.div`
  width: 95%;
  height: 95%;
  background-color:  #00000014;
  border-radius: 2rem;
`
export const ForecastTitle = styled.div`
  width: 100%;
  text-align: center;                           
  p{
    font-size: 4rem;
    font-weight: bold;
  }
`
export const ForecastItem = styled.div`
  width: 100%;
  margin: 2rem 0 0 2rem;
  p{
    margin-top: 3rem;
    font-size: 2.4rem;
  }
`