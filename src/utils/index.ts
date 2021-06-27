import { IBook } from '../types';

interface IExtractedParsedAuthors {
  [id: string]: string;
}

export const parseAuthors = (authors?: string[]): string => {
  if (!authors) return '';

  return authors.join(', ');
};

export const extractParsedAuthors = (books: IBook[]): IExtractedParsedAuthors => {
  const parsedAuthorsByBookId = books.reduce((accumulator, book) => {
    return { ...accumulator, [book.id]: parseAuthors(book.volumeInfo.authors) };
  }, {});

  return parsedAuthorsByBookId;
};
