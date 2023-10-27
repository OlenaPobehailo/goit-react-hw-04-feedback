import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 5px;
  border-radius: 4px;

  background-color: transparent;
  border-color: lightblue;

  font-size: 16px;
  text-transform: capitalize;

  &:hover,
  &:focus {
    background-color: lightblue;
    border-color: lightblue;

    transition: background-color 300ms;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
