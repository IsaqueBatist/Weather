import React from 'react';
import {
  Container,
  Header,
  Informations,
  Temperature,
  ArrowButton
} from './style';
import { ICardBodyProps } from './type';
import arrow from '../../assets/icon/seta-esquerda.png';
import { Image } from '@chakra-ui/react';

const CardBody = ({ propsData, onClick }: ICardBodyProps) => {

  return (
    //CONTEUDO DO COMPONENTE
    // CONDITION, LOCAL TIME, IS_DAY,
    <Container is_day={propsData.is_day}>
      <Header>
        <Image src={propsData.condition?.icon} alt={propsData.condition?.text} boxSize="50" m={0} />
        <ArrowButton onClick={onClick}>
          <img src={arrow} alt="seta para esquerda" width="30" />
        </ArrowButton>
      </Header>
      {propsData.name && <Informations is_day={propsData.is_day}>
        <Temperature>{propsData.temp_f}°F</Temperature>
        <p>{propsData.name}, {propsData.region}, {propsData.country}</p>
        <p>{propsData.condition?.text}</p>
        <p>{propsData.localtime}</p>
      </Informations>}
    </Container>
  );
}
export default CardBody