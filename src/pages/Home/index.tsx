import Navbar from '../../components/Navbar';
import { Search } from '../../components/icons';

import { Container, ContentWrapper, Content, SearchBox, Greetings, Grid, Card, LoadMoreButton } from './styles';

const Home = () => {
  return (
    <Container>
      <ContentWrapper>
        <Content>
          <SearchBox>
            <Search />
            <input type="text" placeholder="Search book" />
          </SearchBox>

          <Greetings>
            Hi, <strong>Mehmed Al Fatih</strong> 👋
          </Greetings>

          <Grid>
            <Card to="#">
              <img src="https://i.imgur.com/PNdraH6.png" alt="Clean Code" />
              <p>Clean Code</p>
              <span>by Robert C. Martin</span>
            </Card>

            <Card to="#">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/41NbRv8byAL._SX329_BO1,204,203,200_.jpg"
                alt="Hooked"
              />
              <p>Hooked</p>
              <span>by Nir Eyal</span>
            </Card>

            <Card to="#">
              <img src="https://i.imgur.com/PNdraH6.png" alt="Clean Code" />
              <p>Clean Code</p>
              <span>by Robert C. Martin</span>
            </Card>

            <Card to="#">
              <img src="https://i.imgur.com/PNdraH6.png" alt="Clean Code" />
              <p>Clean Code</p>
              <span>by Robert C. Martin</span>
            </Card>

            <LoadMoreButton>Load more ...</LoadMoreButton>
          </Grid>
        </Content>
      </ContentWrapper>
      <Navbar />
    </Container>
  );
};

export default Home;
