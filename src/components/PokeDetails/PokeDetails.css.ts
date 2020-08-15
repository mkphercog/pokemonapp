import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(200, 200, 200, 0.4);
`;

export const Board = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 70%;
  height: 80%;
  border-radius: 20px;
  background-color: rgba(160, 160, 160, 0.96);
  overflow: auto;

  @media (min-width: 360px) {
    height: 65%;
  }

  @media (min-width: 411px) {
    height: 60%;
  }

  @media (min-width: 500px) and (orientation: landscape) {
    width: 45%;
    height: 85%;
  }

  @media (min-width: 768px) and (orientation: portrait) {
    width: 50%;
    height: 60%;
  }

  @media (min-width: 1024px) {
    width: 30%;
    height: 70%;
  }

  h1 {
    margin-top: 20px;
    color: white;
    font-size: 18px;
    text-transform: uppercase;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 22px;
    }
  }

  img {
    margin-bottom: 15px;
    flex-shrink: 0;
    width: 110px;
    height: 110px;

    @media (min-width: 768px) {
      margin-bottom: 40px;
      width: 150px;
      height: 150px;
    }
  }

  ul {
    list-style: none;
    margin-top: 10px;

    @media (min-width: 768px) {
      margin-top: 20px;
    }

    li {
      margin: 10px 0;
    }
  }

  p {
    color: white;
    ::first-letter {
      text-transform: uppercase;
    }

    @media (min-width: 768px) {
      font-size: 19px;
    }
  }

  p > span {
    font-weight: bold;
  }
`;
