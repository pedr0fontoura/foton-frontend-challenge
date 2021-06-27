import { Container } from './styles';

import Skeleton from '../../../../components/Skeleton';

const LoadingArticle = () => (
  <Container aria-hidden>
    <Skeleton className="name-skeleton" />
    <Skeleton className="author-skeleton" />
    <div className="description-skeleton">
      <div>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>

      <div>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>

      <div>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    </div>
  </Container>
);

export default LoadingArticle;
