import { useMemo } from 'react';

import { parseAuthors } from '../../../../utils';

import { BlueCircunference, SmallCornerTexturedCircle, PinkRectangle } from '../../../../components/shapes';
import { CurrentBook } from '../../../../components/icons';

import { Container, Content, Cover, Info, Title, Authors, Chapter } from './styles';

interface ICurrentlyReadingProps {
  bookId?: string;
  title?: string;
  authors?: string[];
  currentChapter?: number;
  totalChapters?: number;
  imageUrl?: string;
}

const DEFAULT_IMAGE_URL =
  'http://books.google.com/books/publisher/content?id=rISmCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72tBLGIU_Sf8J-7GaKcpDAV66FvFpRbUETtcV2BWS8meOjS4FTjG6I2jPdMxYtq_W2J7YZJRWY2Wl7Qk5sKdjbgtNZJEdh82umOBXhHYv-rVCDqapuHKiY2L267uaURk9NAS4Oe&source=gbs_api';

const CurrentlyReading = ({
  bookId = 'rISmCgAAQBAJ',
  title = 'Originals',
  authors = ['Adam Grant'],
  currentChapter = 2,
  totalChapters = 9,
  imageUrl = DEFAULT_IMAGE_URL,
}: ICurrentlyReadingProps) => {
  const parsedAuthors = useMemo(() => parseAuthors(authors), [authors]);

  return (
    <Container to={`/books/${bookId}`}>
      <Content>
        <BlueCircunference style={{ position: 'absolute', left: '67.3%', top: '-6%' }} />
        <SmallCornerTexturedCircle style={{ position: 'absolute', left: '89.1%', top: '-19%' }} />
        <PinkRectangle style={{ position: 'absolute', left: '93.1%', top: '64.5%' }} />

        <Info>
          <Title>{title}</Title>
          <Authors>by {parsedAuthors}</Authors>
          <Chapter>
            <CurrentBook /> Chapter <strong>{currentChapter}</strong> From {totalChapters}
          </Chapter>
        </Info>
      </Content>
      <Cover>
        <img src={imageUrl} alt={title} />
      </Cover>
    </Container>
  );
};

export default CurrentlyReading;
