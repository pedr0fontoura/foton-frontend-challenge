import { useState, useMemo, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { IBook } from '../../types';

import { parseAuthors } from '../../utils';
import api from '../../services/api';

import { Back, EyeOff, Book, Headphones, Share } from '../../components/icons';
import {
  PinkCircle,
  DarkBlueCircle,
  LargeBlueCircunference,
  SmallTexturedCircle,
  CornerTexturedCircle,
} from '../../components/shapes';

import LoadingCover from './components/LoadingCover';
import LoadingArticle from './components/LoadingArticle';

import {
  Container,
  Header,
  BackButton,
  Cover,
  Content,
  Article,
  Title,
  Authors,
  Description,
  Actions,
  Message,
} from './styles';

interface IRouteParams {
  id: string;
}

const Details = () => {
  const [book, setBook] = useState<IBook>();

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(false);

  const { id } = useParams<IRouteParams>();

  const parsedAuthors = useMemo(() => parseAuthors(book?.volumeInfo.authors), [book]);

  const updatedDescriptionRef = useCallback(
    (node: HTMLDivElement) => {
      if (node !== null && book) {
        const element = node;

        element.innerHTML = book.volumeInfo.description;
      }
    },
    [book],
  );

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      try {
        const { data } = await api.get<IBook>(`/volumes/${id}`, {
          cancelToken: source.token,
        });

        setBook(data);
        setIsLoading(false);
      } catch (err) {
        if (axios.isCancel(err)) return;

        setError(true);
        setIsLoading(false);
      }
    };

    fetchData();

    return () => source.cancel();
  }, []);

  return (
    <Container>
      <Content>
        <Header>
          <BackButton to="/">
            <Back />
          </BackButton>

          <PinkCircle style={{ position: 'absolute', left: '12.5%', top: '44.3%' }} />
          <DarkBlueCircle style={{ position: 'absolute', left: '19.6%', top: '40.7%' }} />
          <LargeBlueCircunference style={{ position: 'absolute', left: '66.2%', top: '30.5%' }} />
          <SmallTexturedCircle style={{ position: 'absolute', left: '59.3%', top: '77.3%' }} />
          <CornerTexturedCircle style={{ position: 'absolute', right: '0', top: '0' }} />

          {isLoading && <LoadingCover />}

          {!isLoading && !error && (
            <Cover>
              {book?.volumeInfo.imageLinks ? (
                <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
              ) : (
                <EyeOff />
              )}
            </Cover>
          )}
        </Header>

        {isLoading && <LoadingArticle />}

        {!isLoading && !error && book && (
          <Article>
            <Title>
              {book.volumeInfo.title}
              {book.volumeInfo.subtitle && <span>{book.volumeInfo.subtitle}</span>}
            </Title>

            <Authors>{parsedAuthors}</Authors>

            <Description ref={updatedDescriptionRef} />
          </Article>
        )}

        {error && <Message>Something went wrong ...</Message>}
      </Content>

      {!isLoading && !error && (
        <Actions>
          <button type="button">
            <Book />
            <strong>Read</strong>
          </button>

          <button type="button">
            <Headphones />
            <strong>Listen</strong>
          </button>

          <button type="button">
            <Share />
            <strong>Share</strong>
          </button>
        </Actions>
      )}
    </Container>
  );
};

export default Details;
