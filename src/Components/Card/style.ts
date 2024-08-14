import styled from "styled-components";
import Celcius from "../../assets/icons/Weather-Icons-IOS7-Style-PIXEDEN/SVG/degree-celcius.svg"
export const MainContainer = styled.div`
  background-color: #00000014;
  width: 70vw;
  padding: 2rem;
  border-radius: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 5rem;
  }
`

export const CurrentContainer = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 768px) {
    width: 100%;  
  }
`
export const CurrentWeather = styled.div`
  height: 100%;
  display: flex;
  justify-contetent: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0 0 0 5rem;
`

export const City = styled.p`
  font-size: 5.5rem;
  font-weight: 600;
`

export const Temperature = styled.p`
  font-size: 8rem;
  font-weight: 600;
  &::after{
    content:' ';
    width: 70px;
    height: 70px;
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

export const Image = styled.img`
  width: 150px;
  margin-bottom: 1.5rem;
  filter: invert(1);
`

export const ForecastContainer = styled.div`
  width:50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media (max-width: 768px) {
    width: 100%;  
  }
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
    margin-top: 2.4rem;
    font-size: 2.4rem;
  }
`
export const Arrow = styled.img`
  width: 40px;
  filter: invert(1);
  margin: 2rem 0 0 2rem;

`