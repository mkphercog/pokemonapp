import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 50px;
  min-height: 200px;

  @media (orientation: landscape) and (max-width: 768px) {
    min-height: 100px;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 25px;
  }
`;

export const Image = styled.img`
  margin-top: 10px;
  max-width: 100px;
  max-height: 100px;
  transform: scale(1.4);

  @media (min-width: 1024px) {
    cursor: pointer;
  }
`;
