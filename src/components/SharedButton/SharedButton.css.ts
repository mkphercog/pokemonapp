import styled from "styled-components";

export const ButtonStyled = styled.button`
  flex-grow: 0;
  padding: 5px 10px;
  background-color: lightyellow;
  border: 2px solid khaki;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  color: black;
  border-radius: 10px;
  transition: 0.2s;
  cursor: pointer;
  outline-style: none;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  :hover {
    transform: scale(1.2);
    color: black;
    background-color: khaki;
    border: 2px solid lightyellow;
  }
`;
