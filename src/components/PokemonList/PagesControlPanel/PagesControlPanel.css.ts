import styled from "styled-components";

export const ControlPanelWrapper = styled.div`
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
