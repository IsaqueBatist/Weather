import React from 'react';
import { Container, InputContainer } from './style';
import Input from '../input';
import Button from '../Button';
import CardBody from '../CardBody';
const Card = () => {
  return (
    <>
    <Container>
      <InputContainer>
        <Input />
        <Button />
      </InputContainer>
    </Container>
    <CardBody />
    </>
  );
}
export default Card;