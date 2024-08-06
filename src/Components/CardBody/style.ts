import styled from "styled-components";
import bgDay from '../../assets/images/periods of the day/day.png';

export const Container = styled.div`
  background-image: url(${bgDay});
  background-size: cover;
  height: 331px;
  width: 243px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
`

export const Informations = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.29);
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