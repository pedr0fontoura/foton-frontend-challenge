import { useLocation } from 'react-router-dom';

import { Home, Library, Profile } from '../icons';

import { Container, Content, Link } from './styles';

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <Content>
        <Link to="/" $active={pathname === '/'}>
          <Home />
          Home
        </Link>
        <button type="button" disabled>
          <Library />
          Libraries
        </button>
        <button type="button" disabled>
          <Profile />
          Profile
        </button>
      </Content>
    </Container>
  );
};

export default Navbar;
