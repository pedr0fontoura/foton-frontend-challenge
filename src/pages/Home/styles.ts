import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface IGreetingsProps {
  $hide: boolean;
}

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const Content = styled.div`
  max-width: 768px;

  flex: 1;
  display: flex;
  flex-direction: column;

  padding: 0 20px;

  @media (min-width: 768px) {
    margin: 0 auto;
  }
`;

export const SearchBox = styled.div`
  height: 48px;
  width: 100%;

  flex-shrink: 0;

  display: flex;
  align-items: center;

  margin-top: 50px;
  padding: 0 15px;
  border-radius: 10px;

  background: #fdfcfc;

  box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.122623);

  svg {
    color: #dcd8d8;
  }

  input {
    height: 16px;
    width: 100%;

    margin-left: 10px;
    border: none;

    background: #fdfcfc;

    color: #000000;
    line-height: 18px;

    &::placeholder {
      color: #54565a;
    }
  }
`;

export const Greetings = styled.h1<IGreetingsProps>`
  margin-top: 30px;

  color: #54565a;
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;

  transition: all 0.5s;

  strong {
    color: #ff6a79;
    font-weight: 600;
  }

  ${({ $hide }) =>
    $hide
      ? css`
          height: 0;
          margin-top: 0;
          opacity: 0;
        `
      : css`
          margin-top: 30px;
          height: default;
          opacity: 1;
        `}
`;

export const Grid = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: auto;

  padding: 8px 0;
  margin-top: 30px;

  justify-content: space-between;
  row-gap: 12px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(4, 100px);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 150px);
  }
`;

export const Card = styled(Link)`
  width: 100%;

  text-decoration: none;
  color: rgba(49, 49, 49, 0.8);

  > figure {
    width: 100%;
    height: 150px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 5px;

    margin-bottom: 8px;

    font-size: 15px;

    overflow: hidden;

    background: rgba(0, 0, 0, 0.1);

    > img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    svg {
      height: 32px;
      width: 32px;

      color: rgba(0, 0, 0, 0.2);
    }
  }

  > p {
    font-size: 12px;
    line-height: 14px;
    font-weight: 700;
  }

  > span {
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
    font-weight: 900;
  }

  @media (min-width: 768px) {
    > figure {
      height: 200px;

      > svg {
        height: 64px;
        width: 64px;
      }
    }

    > p {
      font-size: 16px;
    }

    > span {
      font-size: 14px;
    }
  }
`;

export const LoadMoreButton = styled.button`
  width: 100%;
  height: 150px;

  padding: 8px;

  border: none;
  border-radius: 5px;

  outline: none;

  opacity: 0.5;

  transition: opacity 0.1s ease-in-out;

  &:hover {
    opacity: 1;
  }

  @media (min-width: 768px) {
    height: 200px;
  }
`;

export const Message = styled.p`
  margin: 50px auto;

  font-size: 24px;
`;
