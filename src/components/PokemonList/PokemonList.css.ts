import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 85%;
  flex-grow: 1;
  margin: 15px 0;
  border: 2px solid black;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% / 3);
  height: calc(100% / 3);
  padding: 5px;
`;

export const PokeName = styled.p`
  font-size: 14px;
`;

export const Image = styled.img`
  max-width: 80px;
  max-height: 80px;

  @media (min-width: 768px) {
    max-width: 100px;
    max-height: 100px;
  }
`;

export const PagesControlPanel = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 25%;
  height: 50px;
  margin: 20px 0;
`;
