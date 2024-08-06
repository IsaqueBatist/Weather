import styled from "styled-components";
import bgDay from '../../assets/images/periods of the day/day.png';
import bgNight from '../../assets/images/periods of the day/night.png';
import { ICardProps } from "./type";

export const Container = styled.div<ICardProps>`
    background-image: url(${props => props.is_day === 1 ? bgDay : bgNight});
    background-size: cover;
    height: 331px;
    color: ${props => props.is_day === 1 ? 'black' : 'white'};
    width: 243px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  `

export const Informations = styled.div<ICardProps>`
  width: 100%;
  background-color: ${props => props.is_day === 1 ? 'rgba(255, 255, 255, 0.29)' : 'rgba(0, 0, 0, 0.29)'};
  margin-bottom: 5px;
  height: 112px;
  border-radius: 0 0 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 3px;
  & p {
    margin-left: 10px;
  }
`
export const Temperature = styled.p`
  font-size: 36px;
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ArrowButton = styled.button<ICardProps>`
  background-color: transparent;
  border: none;
  margin-right: 5px;
  &:hover{
    cursor: pointer;
  }
  img{
    filter: invert(1);
    transform: rotate(180deg);
  }
`