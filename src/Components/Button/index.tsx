import React from 'react';
import SearchIcon from "../../assets/icons/other/search-svgrepo-com.svg";
import { ButtonContainer } from './style';
import { IButtonProps } from './type';
const Button = ({onClick}: IButtonProps) => {
  return (
    <ButtonContainer onClick={onClick}>
      <img src={SearchIcon} alt="searchIcon" width="20"/>
    </ButtonContainer>
  );
}
export default Button