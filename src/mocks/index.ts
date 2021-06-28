import { IFeaturedBook, ICurrentlyReadingBook, IBookReview } from '../types';

export const getFeaturedBooks = async (): Promise<IFeaturedBook[]> => [
  {
    bookId: 'dsz5AwAAQBAJ',
    title: 'Hooked',
    authors: ['Nir Eyal'],
    stats: 120,
    imageUrl:
      'https://books.google.com/books/publisher/content?id=dsz5AwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE723CgWk6Fcs2-fHzbEBs2_BK5jVRFS1OF-ObowT8btz4eYMRxp2haqh79PxX6xDe65XI2obGtSCKNTYRYn42olMzqL_NjSIwvVdMYV_2qsvHjesg4bJ2-I7XxH1MwigfxLeXZiR&source=gbs_api',
    color: '#00173d',
  },
  {
    bookId: '_i6bDeoCQzsC',
    title: 'Clean Code',
    authors: ['Robert C. Martin'],
    stats: 90,
    imageUrl:
      'https://books.google.com/books/content?id=_i6bDeoCQzsC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71JsJVh3xdEWIhP9ErGQq8GR_mTS3TRxk_hapfNRlJb1TQE5HTEABGJagmSaiQBiS4Lsc4q9yHVlY2S6s7pgncd72A1hN7BwzSSsC9yM-tZIea2u23OitFDfoPdmAtyhfWrTd5i&source=gbs_api',
    color: '#451475',
  },
];

export const getCurrentlyReadingBook = async (): Promise<ICurrentlyReadingBook> => ({
  bookId: 'rISmCgAAQBAJ',
  title: 'Originals',
  authors: ['Adam Grant'],
  currentChapter: 2,
  totalChapters: 9,
  imageUrl:
    'https://books.google.com/books/publisher/content?id=rISmCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72tBLGIU_Sf8J-7GaKcpDAV66FvFpRbUETtcV2BWS8meOjS4FTjG6I2jPdMxYtq_W2J7YZJRWY2Wl7Qk5sKdjbgtNZJEdh82umOBXhHYv-rVCDqapuHKiY2L267uaURk9NAS4Oe&source=gbs_api',
});

export const getBookReviews = async (): Promise<IBookReview[]> => [
  {
    title: `Don't Make Me Think Review`,
    author: `Jesse Showalter`,
    views: 5200,
    date: new Date(),
    text: `"Don't Make Me Think" by Steve Krug is one of the first books I read when I was getting into
  digital design. It helped me move from designing things that just "look nice" to designing things
  that are usable, useful, memorable and simple to learn and use.`,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/18ee/3c66/8a3aaad596e85f46d30dd3895020cbc8?Expires=1625443200&Signature=MwIzGL8ciSYmIbCbbqtV1QbLpuNXDro-EtolOS~XHe4vYLmsDYG-IiED24N9nLnVcsgCggXiWERWNVXBGyelj1K9sKXt6pPVtz~4hqOb~pVU78QZekXaCJk4KA9EM8aq6c1gEHd~b~cXmDOl5AaKBb-Mh7dtriJzRA63yWyu--Bn0SojXhQBvcHtEPNl9Kk4ZlJ8iKULLj9ep0hyvfDZqoJdzhKDSvEZs7rSfHBtHJnU2~zOfqU4WY-fH2f7EO3-MPURhO2GXHo~k-LEkFHmXZXNftRRj-hi6ykIF0s7AbDs9vNDXPKjp3LVbiOdeLLYU0~MdUTi5bwyMPhP8dbF2A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
];
