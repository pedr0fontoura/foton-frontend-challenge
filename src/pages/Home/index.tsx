import React, { useState, useMemo, useCallback } from 'react';
import { debounce } from 'lodash';

import { IBook, IBooksApiResponse } from '../../types';
import api from '../../services/api';

import Navbar from '../../components/Navbar';
import { Search, EyeOff } from '../../components/icons';

import { Container, ContentWrapper, Content, SearchBox, Greetings, Grid, Card, LoadMoreButton } from './styles';

interface IExtractedParsedAuthors {
  [id: string]: string;
}

const DEFAULT_SEARCH_LIMIT = 10;

const extractParsedAuthors = (books: IBook[]): IExtractedParsedAuthors => {
  const parsedAuthorsByBookId = books.reduce((accumulator, book) => {
    return { ...accumulator, [book.id]: book.volumeInfo.authors?.join(', ') };
  }, {});

  return parsedAuthorsByBookId;
};

const Home = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  const [searchInputValue, setSearchInputValue] = useState('');
  const [searchLimit, setSearchLimit] = useState(DEFAULT_SEARCH_LIMIT);

  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);

  const parsedAuthors = useMemo(() => extractParsedAuthors(books), [books]);

  const handleSearch = useCallback(
    debounce(async (title: string): Promise<void> => {
      setIsSearching(true);
      setIsLoading(true);

      try {
        if (title.length === 0) {
          setIsSearching(false);
        } else {
          setSearchLimit(DEFAULT_SEARCH_LIMIT);

          const { data } = await api.get<IBooksApiResponse>(`/volumes?q=${title}&maxResults=${searchLimit}`);
          setBooks(data.items);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }, 500),
    [setIsSearching, setSearchLimit, setBooks, setIsLoading],
  );

  const handleSearchInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setSearchInputValue(event.target.value);
      handleSearch(event.target.value);
    },
    [setSearchInputValue, handleSearch],
  );

  return (
    <Container>
      <ContentWrapper>
        <Content>
          <SearchBox>
            <Search />
            <input type="text" placeholder="Search book" value={searchInputValue} onChange={handleSearchInputChange} />
          </SearchBox>

          <Greetings $hide={isSearching}>
            Hi, <strong>Mehmed Al Fatih</strong> 👋
          </Greetings>

          {!isLoading && isSearching && (
            <Grid>
              {books.map(({ id, volumeInfo }) => (
                <Card key={id} to={`/books/${id}`}>
                  <figure>
                    {volumeInfo.imageLinks ? (
                      <img src={volumeInfo.imageLinks?.thumbnail} alt={volumeInfo.title} />
                    ) : (
                      <EyeOff />
                    )}
                  </figure>

                  <p>{volumeInfo.title}</p>

                  {parsedAuthors[id] && <span>by {parsedAuthors[id]}</span>}
                </Card>
              ))}

              <LoadMoreButton>Load more ...</LoadMoreButton>
            </Grid>
          )}
        </Content>
      </ContentWrapper>
      <Navbar />
    </Container>
  );
};

export default Home;
