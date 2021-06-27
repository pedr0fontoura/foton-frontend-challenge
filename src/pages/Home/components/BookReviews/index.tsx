import { useState, useEffect } from 'react';

import { IBookReview } from '../../../../types';

import { getBookReviews } from '../../../../mocks';
import { SmallCornerTexturedCircle } from '../../../../components/shapes';

import { Container, Card, Cover, Content, Title, Info, Text, ReflexEffect } from './styles';

interface IBookReviewProps {
  title: string;
  author: string;
  views: number;
  date: Date;
  text: string;
  imageUrl: string;
}

const BookReview = ({ title, author, views, date, text, imageUrl }: IBookReviewProps) => {
  return (
    <Card to="/#">
      <Cover>
        <img src={imageUrl} alt={title} />

        <ReflexEffect style={{ height: '175px', width: '175px', left: '-1.5%', top: '-11%' }} />
        <ReflexEffect style={{ height: '116px', width: '116px', left: '58.8%', top: '11%' }} />
        <SmallCornerTexturedCircle
          style={{ position: 'absolute', left: '89.8%', top: '-11%', height: '69px', width: '69px' }}
        />
      </Cover>
      <Content>
        <Title>{title}</Title>
        <Info>
          <li>{author}</li>
          <li>{views} Views</li>
          <li>{date.toDateString()}</li>
        </Info>
        <Text>{text}</Text>
      </Content>
    </Card>
  );
};

const BookReviews = () => {
  const [reviews, setReviews] = useState<IBookReview[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const result = await getBookReviews();

      setReviews(result);
    };

    fetchData();
  }, []);

  return (
    <Container>
      {reviews.map(({ title, author, views, date, text, imageUrl }) => (
        <BookReview
          key={`${title}_${author}`}
          title={title}
          author={author}
          views={views}
          date={date}
          text={text}
          imageUrl={imageUrl}
        />
      ))}
    </Container>
  );
};

export default BookReviews;
