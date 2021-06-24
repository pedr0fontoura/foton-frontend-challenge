import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  overflow-y: auto;
  overflow-x: hidden;
`;

export const Header = styled.div`
  height: 282px;

  position: relative;

  border-radius: 0px 0px 100px 0px;

  background: #fff6e5;
`;

export const BackButton = styled(Link)`
  position: absolute;

  left: 33px;
  top: 55px;

  text-decoration: none;
  color: #000000;
`;

export const Cover = styled.figure`
  height: 229px;
  width: 153px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  border-radius: 5px;

  margin: 84px auto -36px auto;

  background: rgba(0, 0, 0, 0.1);

  &::after {
    content: '';

    height: 17px;
    width: 100%;

    position: absolute;
    left: 0;
    bottom: -10px;

    background: #d8d8d8;
    filter: blur(27.1828px);
  }

  @media (min-width: 768px) {
    height: 279px;
    width: 203px;
  }

  > img {
    height: 100%;
    width: 100%;

    position: relative;

    border-radius: 5px;

    object-fit: cover;
  }

  > svg {
    height: 64px;
    width: 64px;

    color: rgba(0, 0, 0, 0.2);
  }
`;

export const Article = styled.article`
  max-width: 768px;
  width: 100%;

  padding: 67px 20px 0 20px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding-top: 134px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 7px;

  font-size: 24px;
  font-weight: bold;
  color: #36383a;

  span {
    font-weight: 400;

    &::before {
      content: ':';
      margin: 0 4px;
    }
  }
`;

export const Authors = styled.p`
  display: block;

  margin-bottom: 10px;

  color: #ff6978;
`;

export const Description = styled.div`
  color: rgba(49, 49, 49, 0.6);

  font-size: 14px;
  line-height: 25px;

  white-space: pre-line;

  p {
    margin: 4px 0;
  }
`;

const slideInFromBotton = keyframes`
 0% {
    transform: translateY(50%);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Actions = styled.div`
  height: 56px;
  width: 335px;

  display: flex;
  align-items: center;

  margin: 0 auto 57px auto;
  border-radius: 2px;

  background: #ffffff;
  box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);

  animation: 0.5s ease-out 0s 1 ${slideInFromBotton};

  button {
    height: 100%;

    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    flex: 1;

    background: none;
    border: none;

    transition: all 0.1s ease-in-out;

    &:hover {
      background: rgba(0, 0, 0, 0.4);
    }

    &:active {
      background: rgba(0, 0, 0, 0.5);
    }

    svg {
      color: #cfcbd2;
    }

    strong {
      margin-left: 10px;

      color: #3f4043;
      font-size: 14px;
    }

    & + button {
      &::before {
        content: '';

        height: 16px;
        width: 1px;

        position: absolute;
        left: 0;

        background: rgba(151, 151, 151, 0.2);
      }
    }
  }
`;

export const Message = styled.p`
  margin: 50px auto;

  font-size: 24px;
`;
