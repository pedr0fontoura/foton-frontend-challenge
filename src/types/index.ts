export interface IBook {
  id: string;
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    description: string;
    imageLinks: {
      thumbnail: string;
    };
  };
}

export interface IBooksApiResponse {
  kind: string;
  totalItems: number;
  items: IBook[];
}

export interface IFeaturedBook {
  bookId: string;
  title: string;
  authors: string[];
  stats: number;
  imageUrl: string;
  color: string;
}

export interface ICurrentlyReadingBook {
  bookId: string;
  title: string;
  authors: string[];
  currentChapter: number;
  totalChapters: number;
  imageUrl: string;
}

export interface IBookReview {
  title: string;
  author: string;
  views: number;
  date: Date;
  text: string;
  imageUrl: string;
}
