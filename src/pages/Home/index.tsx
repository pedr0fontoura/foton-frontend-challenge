import React, { useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { debounce } from 'lodash';

import { IBook, IBooksApiResponse } from '../../types';

import { extractParsedAuthors } from '../../utils';
import api from '../../services/api';

import Navbar from '../../components/Navbar';
import { Search, EyeOff } from '../../components/icons';

import FeaturedBooks from './components/FeaturedBooks';
import CurrentlyReading from './components/CurrentlyReading';
import BookReviews from './components/BookReviews';
import LoadingGrid from './components/LoadingGrid';

import {
  Container,
  ContentWrapper,
  Content,
  SearchBox,
  Greetings,
  Grid,
  Card,
  LoadMoreButton,
  Message,
  Section,
  SectionHeader,
} from './styles';

const DEFAULT_SEARCH_MAX_RESULTS = 10;

// Taken from https://developers.google.com/books/docs/v1/using#st_params
const SEARCH_MAX_RESULTS_LIMIT = 40;

const Home = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  const [searchInputValue, setSearchInputValue] = useState('');
  const [searchMaxResults, setSearchMaxResults] = useState(DEFAULT_SEARCH_MAX_RESULTS);

  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const [error, setError] = useState(false);

  const parsedAuthors = useMemo(() => extractParsedAuthors(books), [books]);
  const isBookListEmpty = useMemo(() => books.length === 0, [books]);
  const canLoadMoreBooks = useMemo(() => searchMaxResults < SEARCH_MAX_RESULTS_LIMIT, [searchMaxResults]);

  const handleSearch = useCallback(
    debounce(async (title: string): Promise<void> => {
      setIsSearching(true);
      setIsLoading(true);

      if (!title.length) {
        setIsSearching(false);
        setIsLoading(false);
        setError(false);
        return;
      }

      try {
        setSearchMaxResults(DEFAULT_SEARCH_MAX_RESULTS);

        const { data } = await api.get<IBooksApiResponse>(
          `/volumes?q=${title}&maxResults=${DEFAULT_SEARCH_MAX_RESULTS}`,
        );

        setBooks(data.items || []);
      } catch {
        setError(true);
      }

      setIsLoading(false);
    }, 500),
    [setIsSearching, setSearchMaxResults, searchMaxResults, setBooks, setIsLoading],
  );

  const handleSearchInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setSearchInputValue(event.target.value);
      handleSearch(event.target.value);
    },
    [setSearchInputValue, handleSearch],
  );

  const handleLoadMore = useCallback(
    async (searchValue: string) => {
      const updatedsearchResults = searchMaxResults + DEFAULT_SEARCH_MAX_RESULTS;

      if (!canLoadMoreBooks) return;

      setIsLoading(true);

      try {
        const { data } = await api.get<IBooksApiResponse>(
          `/volumes?q=${searchValue}&maxResults=${updatedsearchResults}`,
        );

        setBooks(data.items || []);
      } catch {
        setError(true);
      }

      setIsLoading(false);
      setSearchMaxResults(updatedsearchResults);
    },
    [searchMaxResults, canLoadMoreBooks, setIsLoading, setBooks, setIsLoading],
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

          {!isSearching && (
            <>
              <Section>
                <SectionHeader>
                  <h2>Discover new book</h2>
                  <Link to="/#">More</Link>
                </SectionHeader>
                <FeaturedBooks />
              </Section>

              <Section>
                <SectionHeader>
                  <h2>Currently Reading</h2>
                  <Link to="/#">All</Link>
                </SectionHeader>
                <CurrentlyReading />
              </Section>

              <Section>
                <SectionHeader>
                  <h2>Reviews of The Days</h2>
                  <Link to="/#">All Videos</Link>
                </SectionHeader>
                <BookReviews />
              </Section>
            </>
          )}

          {isLoading && <LoadingGrid />}

          {isSearching && !isLoading && !error && !isBookListEmpty && (
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

              {canLoadMoreBooks && (
                <LoadMoreButton onClick={() => handleLoadMore(searchInputValue)}>Load more ...</LoadMoreButton>
              )}
            </Grid>
          )}

          {isSearching && !isLoading && !error && isBookListEmpty && <Message>No books found ...</Message>}

          {!isLoading && error && <Message>Something went wrong ...</Message>}
        </Content>
      </ContentWrapper>
      <Navbar />
    </Container>
  );
};

export default Home;
