import React from 'react';
import lupaIcon from '../../assets/icon/lupa.png';
import styled from 'styled-components';
import { IButtonProps } from './type';

const ButtonContainer = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 10px;
  margin-left: 10px;
`;
const Button = ({onClick}: IButtonProps) => {
  return (
    <ButtonContainer type='submit' onClick={onClick}>
      <img src={lupaIcon}alt="lupa.png" width="20"/>
    </ButtonContainer>
  );
}
export default Button