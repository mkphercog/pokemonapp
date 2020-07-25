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

  .desc {
    font-size: 10px;
    text-align: center;
    margin-top: 20px;

    @media (min-width: 768px) {
      font-size: 14px;
    }
  }

  .prev-page {
    transform: rotate(180deg);
  }

  .prev-page,
  .next-page {
    font-size: 14px;

    @media (min-width: 768px) {
      font-size: 18px;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
`;

export const CounterPageForm = styled.form`
  margin: 10px;
  width: 30%;
`;

export const NumberInput = styled.input`
  padding: 5px;
  border: none;
  width: 100%;
  text-align: center;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline-style: none;
  }
`;
