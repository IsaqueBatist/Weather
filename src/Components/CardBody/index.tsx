import React from 'react';
import { 
  Container,
  Informations,
  Temperature } from './style';
import { ICardBodyProps } from './type';
const CardBody = ({condition, localtime, is_day, name, region, country, temp_f}: ICardBodyProps) => {
  return (
    //CONTEUDO DO COMPONENTE
    // CONDITION, LOCAL TIME, IS_DAY,
    <Container>
      <Informations>
        <Temperature>{temp_f}°F</Temperature>
        <p>{name}, {region}, {country}</p>
        <p>{condition.text}</p>
        <p>{localtime}</p>
      </Informations>
    </Container>
  );
}
export default CardBody