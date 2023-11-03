import FavoriteAuthors from '../components/FavoriteAuthors';
import FavoriteBooks from '../components/FavoriteBooks';
import styled from 'styled-components';
import Library from '../components/Library';
import Header from '../components/Header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const HomeSection = styled.div`
  width: 100%;
  flex: 1;
  margin-left: auto;
  border-radius: 32px 0 0 0;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.05);
  background-color: ${(props) => props.theme.colors.white};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: calc(100% - 140px);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding-bottom: 65px;
  }
`;

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <FavoriteBooks />
        <HomeSection>
          <FavoriteAuthors />
          <Library />
        </HomeSection>
      </Container>
    </>
  );
};

export default Home;
