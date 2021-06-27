import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 187px;

  padding: 8px 0;

  justify-content: space-between;
  row-gap: 12px;

  div.img-skeleton {
    width: 100%;
    height: 150px;

    border-radius: 5px;
  }

  div.name-skeleton {
    height: 12px;
    width: 90%;

    margin-top: 4px;
    border-radius: 5px;
  }

  div.author-skeleton {
    height: 10px;
    width: 60%;

    margin-top: 8px;
    border-radius: 5px;
  }

  @media (min-width: 640px) {
    grid-template-columns: repeat(4, 100px);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 150px);
    grid-template-rows: auto;

    div.img-skeleton {
      height: 200px;
    }

    div.name-skeleton {
      height: 16px;
    }

    div.author-skeleton {
      height: 14px;
    }
  }
`;
