import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

interface ILinkProps {
  $active?: boolean;
}

export const Container = styled.nav`
  height: 59px;
  width: 100%;

  background: #fff;
`;

export const Content = styled.div`
  height: 100%;
  max-width: 768px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  margin: 0 auto;

  button {
    display: flex;
    flex-direction: column;
    align-items: center;

    border: none;
    outline: none;

    text-decoration: none;
    font-size: 10px;
    color: #bfbebf;

    background: none;

    &:disabled {
      cursor: default;
    }

    svg {
      margin-bottom: 8px;
    }
  }
`;

export const Link = styled(RouterLink)<ILinkProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-decoration: none;
  font-size: 10px;
  color: ${({ $active }) => ($active ? '#000000' : '#BFBEBF')};

  &:hover {
    color: #000000;
  }

  svg {
    margin-bottom: 8px;
  }
`;
