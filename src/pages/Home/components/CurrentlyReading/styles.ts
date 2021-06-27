import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  height: 130px;
  width: 100%;

  position: relative;

  margin: 15px 0;

  display: flex;
  align-items: center;

  color: #2a2b26;
  text-decoration: none;
`;

export const Content = styled.div`
  height: 100px;
  width: 331px;

  position: relative;

  display: flex;

  margin-left: -20px;
  border-radius: 0 4px 4px 0;

  background: #eef5db;

  overflow: hidden;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px 0;
  margin-left: 118px;
`;

export const Title = styled.h3`
  color: rgba(42, 43, 38, 1);

  font-family: 'Playfair Display', sans-serif;
  letter-spacing: 2px;
`;

export const Authors = styled.p`
  margin-top: 5px;

  color: rgba(116, 119, 109, 1);

  font-family: 'Roboto', sans-serif;
  font-size: 10px;
  font-weight: 400px;
`;

export const Chapter = styled.p`
  display: flex;
  align-items: center;

  margin-top: auto;

  font-size: 10px;

  svg {
    margin-right: 4px;
  }

  strong {
    margin: 0 4px;
    color: #ff6978;
  }
`;

export const Cover = styled.figure`
  height: 130px;
  width: 88px;

  position: absolute;

  top: 0;

  box-shadow: 5px 7px 32px rgba(140, 170, 58, 0.4);

  img {
    height: 100%;
    width: 100%;

    border-radius: 4px;
  }
`;
