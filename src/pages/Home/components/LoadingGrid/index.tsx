import { Container } from './styles';

import Skeleton from '../../../../components/Skeleton';

const LoadingCard = () => (
  <div>
    <Skeleton className="img-skeleton" />
    <Skeleton className="name-skeleton" />
    <Skeleton className="author-skeleton" />
  </div>
);

const LoadingGrid = () => (
  <Container aria-hidden>
    <LoadingCard />
    <LoadingCard />
    <LoadingCard />

    <LoadingCard />
    <LoadingCard />
    <LoadingCard />

    <LoadingCard />
    <LoadingCard />
    <LoadingCard />
  </Container>
);

export default LoadingGrid;
