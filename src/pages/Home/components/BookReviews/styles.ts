import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div``;

export const Card = styled(Link)`
  height: 267px;
  width: 100%;

  display: block;

  border-radius: 4px;

  text-decoration: none;

  background: #fff;

  overflow: hidden;
`;

export const Cover = styled.figure`
  height: 181px;
  width: 100%;

  position: relative;

  overflow: hidden;

  img {
    height: 100%;
    width: 100%;

    object-fit: cover;

    filter: brightness(0.9);
  }
`;

export const ReflexEffect = styled.div`
  height: 25px;
  width: 25px;

  position: absolute;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.1);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  padding: 15px;
`;

export const Title = styled.h3`
  color: rgba(49, 49, 49, 0.8);

  font-size: 12px;
`;

export const Info = styled.ul`
  display: flex;

  margin: 5px 0;

  color: rgba(107, 107, 107, 0.8);
  font-size: 8px;
  list-style: none;

  li {
    display: flex;
    align-items: center;

    &::before {
      content: ' ';

      height: 3px;
      width: 3px;

      display: block;

      margin-right: 4px;
      border-radius: 50%;

      background: rgba(106, 103, 103, 0.8);
    }

    & + li {
      margin-left: 8px;
    }
  }
`;

export const Text = styled.p`
  font-size: 10px;
  color: rgba(107, 107, 107, 0.8);
`;
