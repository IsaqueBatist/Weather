import styled from "styled-components";

export const Input = styled.input`
  padding: 10px;
  border-radius: 10px 0 0 10px;
  background-color: ${({ theme }) => theme.inputColor};
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  width: 75%;
  &:focus {
    outline: none;
  }
`