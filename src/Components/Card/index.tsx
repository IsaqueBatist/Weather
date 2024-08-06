import React, { useEffect, useState } from 'react';
import { Container, InputContainer, TextError, Tittle } from './style';
import Input from '../input';
import Button from '../Button';
import CardBody from '../CardBody';
import { api } from '../../services/api';
import { useQuery } from 'react-query';
import { Spinner } from '@chakra-ui/react';
const Card = () => {

  const [valueInput, setValueInput] = useState('');
  const [fetchedData, setFetchedData] = useState(null);

  const { data, isLoading, error, refetch } = useQuery('weather', () => {
    return api.get(`/current.json`, {
      params: {
        q: valueInput
      }
    }).then(response => response.data)
  }, {
    enabled: false,
    refetchInterval: 10000,
    onSuccess: ((data) => { setFetchedData(data) })
  }) as { data: any, isLoading: boolean, error: any, refetch: () => void };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    refetch()
  }
  const handleResetData = () => {
    setFetchedData(null)
  }
  let deserializedData = {}
  if (fetchedData) {
    const { location, current } = fetchedData;
    const { name, region, country, localtime } = location || {};
    const { temp_f, condition, is_day } = current || {};
    deserializedData = { name, region, country, localtime, temp_f, condition, is_day };
  }


  return (
    <>
    
    {isLoading? <Spinner size='xl' color="white"/> : (
        < Container >
          <InputContainer>
            <Tittle>Search weather of: </Tittle>
            <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
              <Input value={valueInput} onChange={(e) => setValueInput(e.target.value)} isrequired={true} />
              <Button />
            </form>
          </InputContainer>
          {error && (
            error?.response && error?.response.data.error.code === 1006 && <TextError>No matching location found</TextError>
          )}
        </Container >
    )}


      {fetchedData && <CardBody propsData={deserializedData} onClick={handleResetData} />}

    </>
  );
}
export default Card;