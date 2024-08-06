import React from 'react';
import { Input } from './style';
import { IInputPropos } from './type';
const input = ({value, onChange, isrequired}: IInputPropos) => {
  return (
    <Input value={value} onChange={onChange} required={isrequired}/>
  );
}
export default input