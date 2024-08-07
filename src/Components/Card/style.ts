import styled from "styled-components";

export const Container = styled.div`
  width: 243px;
  background-color: ${({ theme }) => theme.cardColor};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 7px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;
export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
`

export const TextError = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  width: 100%;
`
export const Tittle = styled.h1`
  font-size: 12px;
  color: ${({ theme }) => theme.titleColor};;
  margin: 0;
`