import styled from "styled-components";
import Celcius from "../../assets/icons/Weather-Icons-IOS7-Style-PIXEDEN/SVG/degree-celcius.svg"
export const MainContainer = styled.div`
  background-color: #00000040;
  width: 70vw;
  padding: 2rem;
  border-radius: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100vw;
    margin-top: 40rem
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
    width: 7rem;
    height: 7rem;
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
  width: 15rem;
  margin-bottom: 1.5rem;
  filter: invert(1);
  @media (max-width: 768px) {
    width: 7rem;
  }
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
  @media (max-width: 768px) {
    margin-top: 2rem;
  }

`
export const ForecastTitle = styled.div`
  width: 100%;
  text-align: center;                           
  p{
    font-size: 4rem;
    font-weight: bold;
  }
`
export const ForecastItem = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  margin: 2rem 0 0 2rem;
  p{
    margin-top: 2.4rem;
    font-size: 2.4rem;
  }
`
export const Arrow = styled.img`
  width: 4rem;
  filter: invert(1);
  margin: 2rem 0 0 2rem;

`