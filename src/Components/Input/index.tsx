import React from 'react';
import './style.css'
import { IInputProps } from './type';
const Input = ({onChange, onClick}: IInputProps) => {
  return (
    <>
    <form className="form" onSubmit={e => e.preventDefault()}>
      <button onClick={onClick} type='button'>
        <svg width="34" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search" style={{filter: 'invert(1)'}}>
          <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </button>
      <input className="input" placeholder="Type your text" required type="text" onChange={onChange}/>
        <button className="reset">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 48 48" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
    </form>
    </>
  );
}
export default Input