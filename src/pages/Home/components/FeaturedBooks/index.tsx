import { useMemo, useState, useEffect } from 'react';

import { IFeaturedBook } from '../../../../types';

import { parseAuthors } from '../../../../utils';
import { getFeaturedBooks } from '../../../../mocks';

import { Charts } from '../../../../components/icons';
import { TexturedCircle, BlueCircunference, PinkRectangle, OrangeTriangle } from '../../../../components/shapes';

import { Container, Card, Cover, Info, Title, Authors, Stats } from './styles';

interface IFeaturedBookProps {
  bookId: string;
  title: string;
  authors: string[];
  stats: number;
  imageUrl: string;
  color: string;
}

const FeaturedBook = ({ bookId, title, authors, stats, imageUrl, color }: IFeaturedBookProps) => {
  const parsedAuthors = useMemo(() => parseAuthors(authors), [authors]);

  return (
    <Card $bgColor={color} to={`/books/${bookId}`}>
      <TexturedCircle style={{ position: 'absolute', left: '-9.2%', top: '17.9%' }} />
      <BlueCircunference style={{ position: 'absolute', left: '53%', top: '10%' }} />
      <PinkRectangle style={{ position: 'absolute', left: '53%', top: '68.7%', zIndex: 1 }} />
      <OrangeTriangle style={{ position: 'absolute', left: '62.9%', top: '2.7%', zIndex: 1 }} />

      <Info>
        <Title>{title}</Title>
        <Authors>{parsedAuthors}</Authors>
        <Stats>
          <Charts />
          <strong>{stats}+</strong> Read Now
        </Stats>
      </Info>
      <Cover>
        <img src={imageUrl} alt={title} />
      </Cover>
    </Card>
  );
};

const FeaturedBooks = () => {
  const [featuredBooks, setFeaturedBooks] = useState<IFeaturedBook[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const result = await getFeaturedBooks();

      setFeaturedBooks(result);
    };

    fetchData();
  }, []);

  return (
    <Container>
      {featuredBooks.map(({ bookId, title, authors, stats, imageUrl, color }) => (
        <FeaturedBook
          key={bookId}
          bookId={bookId}
          title={title}
          authors={authors}
          stats={stats}
          imageUrl={imageUrl}
          color={color}
        />
      ))}
    </Container>
  );
};

export default FeaturedBooks;
