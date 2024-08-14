import styled from "styled-components";

export const InputText = styled.input`
  color: black;
  width: 90%;
  height: 2rem;
  padding: 2rem;
  &:focus{
    outline: none;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 2rem;
  overflow: hidden;
`