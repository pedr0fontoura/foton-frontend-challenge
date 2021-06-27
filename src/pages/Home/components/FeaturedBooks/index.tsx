import { useState } from 'react';

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

const defaultFeaturedBooks: IFeaturedBookProps[] = [
  {
    bookId: 'GXWkDwAAQBAJ',
    title: 'Clean Code',
    authors: ['Robert C. Martin'],
    stats: 120,
    imageUrl:
      'https://books.google.com/books/publisher/content?id=GXWkDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE703DwhGxAmUQZ_8sqjiUIva9nNOqcUbzhvVFszRecSj1CvCNT3XjqQ_coMS1PlwM4zk5M2sUvr6eSN0esbWf0hKcxMSV3yPhAFAWQEU19uOnoIm7UNUEKtfekOiyJFt94rrrVxh&source=gbs_api',
    color: '#00173d',
  },
  {
    bookId: 'dsz5AwAAQBAJ',
    title: 'Hooked',
    authors: ['Nir Eyal'],
    stats: 90,
    imageUrl:
      'https://books.google.com/books/publisher/content?id=dsz5AwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE723CgWk6Fcs2-fHzbEBs2_BK5jVRFS1OF-ObowT8btz4eYMRxp2haqh79PxX6xDe65XI2obGtSCKNTYRYn42olMzqL_NjSIwvVdMYV_2qsvHjesg4bJ2-I7XxH1MwigfxLeXZiR&source=gbs_api',
    color: '#451475',
  },
];

const FeaturedBook = ({ bookId, title, authors, stats, imageUrl, color }: IFeaturedBookProps) => (
  <Card $bgColor={color} to={`/books/${bookId}`}>
    <TexturedCircle style={{ position: 'absolute', left: '-9.2%', top: '17.9%' }} />
    <BlueCircunference style={{ position: 'absolute', left: '53%', top: '10%' }} />
    <PinkRectangle style={{ position: 'absolute', left: '53%', top: '68.7%', zIndex: 1 }} />
    <OrangeTriangle style={{ position: 'absolute', left: '62.9%', top: '2.7%', zIndex: 1 }} />

    <Info>
      <Title>{title}</Title>
      <Authors>{authors}</Authors>
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

const FeaturedBooks = () => {
  const [featuredBooks] = useState(defaultFeaturedBooks);

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
