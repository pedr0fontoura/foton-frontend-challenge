import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  height: 229px;
  width: 153px;

  margin: 84px auto 0 auto;
  border-radius: 5px;

  div.img-skeleton {
    position: relative;

    height: 100%;
    width: 100%;
    border-radius: 5px;
  }

  @media (min-width: 768px) {
    width: 203px;
    height: 279px;
  }
`;
