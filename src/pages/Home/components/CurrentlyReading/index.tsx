import { useState, useMemo, useEffect } from 'react';

import { ICurrentlyReadingBook } from '../../../../types';

import { getCurrentlyReadingBook } from '../../../../mocks';
import { parseAuthors } from '../../../../utils';

import { BlueCircunference, SmallCornerTexturedCircle, PinkRectangle } from '../../../../components/shapes';
import { CurrentBook } from '../../../../components/icons';

import { Container, Content, Cover, Info, Title, Authors, Chapter } from './styles';

const CurrentlyReading = () => {
  const [currentBook, setCurrentBook] = useState<ICurrentlyReadingBook>({} as ICurrentlyReadingBook);

  const { bookId, authors, title, currentChapter, totalChapters, imageUrl } = currentBook;

  const parsedAuthors = useMemo(() => parseAuthors(authors), [authors]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const result = await getCurrentlyReadingBook();

      setCurrentBook(result);
    };

    fetchData();
  }, []);

  return (
    <Container to={`/books/${bookId}`}>
      <Content>
        <BlueCircunference style={{ position: 'absolute', left: '67.3%', top: '-6%' }} />
        <SmallCornerTexturedCircle style={{ position: 'absolute', left: '89.1%', top: '-19%' }} />
        <PinkRectangle style={{ position: 'absolute', left: '93.1%', top: '64.5%' }} />

        <Info>
          <Title>{title}</Title>
          <Authors>by {parsedAuthors}</Authors>
          <Chapter>
            <CurrentBook /> Chapter <strong>{currentChapter}</strong> From {totalChapters}
          </Chapter>
        </Info>
      </Content>
      <Cover>
        <img src={imageUrl} alt={title} />
      </Cover>
    </Container>
  );
};

export default CurrentlyReading;
