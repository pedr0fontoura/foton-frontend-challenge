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
