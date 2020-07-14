import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  padding: 10px;
`;

export const List = styled.div`
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 95%;
  flex-grow: 1;
  margin: 15px 0 0;
  padding: 10px;

  @media (min-width: 768px) {
    width: 85%;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% / 3);
  height: calc(100% / 3);
  margin: 15px 0;
  padding: 5px;
  transition: 0.2s;

  @media (min-width: 1024px) {
    width: calc(100% / 4);
    height: calc(100% / 4);
    margin: 15px 20px;
    :hover {
      border-radius: 10px;
      background-color: lightgray;
      cursor: pointer;
    }
  }
`;

export const PokeName = styled.p`
  text-transform: uppercase;
  font-size: 10px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Image = styled.img`
  max-width: 80px;
  max-height: 80px;
  margin-top: 10px;

  @media (min-width: 768px) {
    max-width: 100px;
    max-height: 100px;
  }
`;

export const PagesControlPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 45%;
  margin: 10px 0;

  @media (min-width: 768px) {
    width: 20%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
`;
