import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface ICardProps {
  $bgColor?: string;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  padding-left: 19px;

  overflow-x: auto;
`;

export const Card = styled(Link)<ICardProps>`
  height: 139px;
  width: 272px;

  position: relative;

  display: flex;
  justify-content: space-between;
  flex-shrink: 0;

  background-color: ${({ $bgColor }) => $bgColor || '#00173d'};

  border-radius: 5px;
  padding: 15px 20px;

  color: #fff;
  text-decoration: none;

  overflow: hidden;
`;

export const Info = styled.div`
  height: 100%;

  position: relative;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  font-family: 'Playfair Display';
  font-size: 27px;
  font-weight: 700;
`;

export const Authors = styled.p`
  margin-top: 5px;

  font-size: 14px;
  font-style: italic;
`;

export const Stats = styled.p`
  display: flex;
  align-items: center;

  margin-top: auto;

  font-size: 10px;

  svg {
    margin-right: 3.33px;
  }

  strong {
    margin-right: 4px;
  }
`;

export const Cover = styled.figure`
  height: 109px;
  width: 73px;

  position: relative;

  img {
    height: 100%;
    width: 100%;

    border-radius: 5px;
  }
`;
