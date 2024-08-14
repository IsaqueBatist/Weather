import React from 'react';
import { InputContainer, InputText } from './style';
import Button from '../Button';
import { IInputProps } from './type';
const Input = ({ onClick, onChange }: IInputProps) => {
  return (
    <>
      <InputContainer>
        <Button onClick={onClick} />
        <InputText onChange={onChange} placeholder='Fill a city' />
      </InputContainer>
    </>
  );
}
export default Input