import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 300px;
  min-height: 300px;
  padding: 10px;
  border: 5px solid whitesmoke;
  border-radius: 20px;
`;

export const Title = styled.h1`
  text-transform: uppercase;
`;

export const Image = styled.img`
  margin-top: 20px;
  max-width: 100px;
  max-height: 100px;
  transform: scale(1.4);
`;
