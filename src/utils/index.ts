import { IBook } from '../types';

interface IExtractedParsedAuthors {
  [id: string]: string;
}

export const parseAuthors = (book?: IBook): string => {
  if (!book) return '';

  return book.volumeInfo.authors?.join(', ');
};

export const extractParsedAuthors = (books: IBook[]): IExtractedParsedAuthors => {
  const parsedAuthorsByBookId = books.reduce((accumulator, book) => {
    return { ...accumulator, [book.id]: parseAuthors(book) };
  }, {});

  return parsedAuthorsByBookId;
};
