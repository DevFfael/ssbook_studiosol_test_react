import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import styled from 'styled-components';
import BookReview from '../components/BookReview';

const HeaderBookPageContainer = styled.div`
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const Book = () => {
  const { id } = useParams();

  return (
    <>
      <HeaderBookPageContainer>
        <Header />
      </HeaderBookPageContainer>
      <BookReview />
    </>
  );
};

export default Book;
