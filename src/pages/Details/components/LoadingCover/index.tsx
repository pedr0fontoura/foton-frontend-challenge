import { Container } from './styles';

import Skeleton from '../../../../components/Skeleton';

const LoadingCover = () => (
  <Container aria-hidden>
    <Skeleton className="img-skeleton" />
  </Container>
);

export default LoadingCover;
