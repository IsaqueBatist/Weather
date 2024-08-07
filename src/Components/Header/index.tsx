import React from 'react';
import { HeaderContainer } from './style';
import ButtonTogler from '../ButtonTogler';
import { IHeaderProps } from './type';
const Header = ({onClick} : IHeaderProps) => {
  return (
    <HeaderContainer>
      <ButtonTogler onClick={onClick}/>
    </HeaderContainer>
  );
}
export default Header