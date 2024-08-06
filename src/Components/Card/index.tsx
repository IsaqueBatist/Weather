import React, { useState } from 'react';
import { Container, InputContainer } from './style';
import Input from '../input';
import Button from '../Button';
import CardBody from '../CardBody';
import { api } from '../../services/api';
import { Console } from 'console';
const Card = () => {

  const [valueInput, setValueInput] = useState('');
  const [data, setData] = useState<any>({} as any);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await handleGetData()
  }

  const handleGetData = async () => {
    try {
      const {data} = await api.get(`/current.json`,{
        params: {
          q: valueInput
        }
      });
      if(data.location && data.current){
        const { temp_f, condition, is_day} = data.current;
        const {name, region, country, localtime} = data.location;
        setData({name, region, country, localtime, temp_f, condition, is_day});
      }else {
        console.log('dados não encontrados')
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Container>
        <InputContainer>
          <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
            <Input value={valueInput} onChange={(e) => setValueInput(e.target.value)} isrequired={true} />
            <Button />
          </form>
        </InputContainer>
      </Container>
      <CardBody condition={data.condition} country={data.country} is_day={data.is_day} localtime={data.localtime} name={data.name} region={data.region} temp_f={data.temp_f} />
    </>
  );
}
export default Card;