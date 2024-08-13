import styled from "styled-components";

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
export const ForecastContainer = styled.div`
  width:50%;
  background-color: red;
`

export const City = styled.p`
  font-size: 7rem;
  font-weight: 600;
`

export const Temperature = styled.p`
  font-size: 9.6rem;
  font-weight: 600;
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