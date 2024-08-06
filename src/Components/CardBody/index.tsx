import React from 'react';
import { 
  Container,
  Informations,
  Temperature } from './style';
const CardBody = () => {
  return (
    //CONTEUDO DO COMPONENTE
    // CONDITION, LOCAL TIME, IS_DAY,
    <Container>
      <Informations>
        <Temperature>23.1°C</Temperature>
        <p>Itu, SP, Brazil</p>
        <p>Clear</p>
        <p>August 8, 2024</p>
      </Informations>
    </Container>
  );
}
export default CardBody