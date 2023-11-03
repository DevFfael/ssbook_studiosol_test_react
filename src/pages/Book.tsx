import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import styled from 'styled-components';
import BookReview from '../components/BookReview';
import { useQuery } from '@apollo/client';
import { GET_BOOK_ID } from '../api';
import Loading from '../utils/Loading';

const HeaderBookPageContainer = styled.div`
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const Book = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_BOOK_ID, {
    variables: { id },
  });

  if (loading) return <Loading />;
  return (
    <>
      <HeaderBookPageContainer>
        <Header />
      </HeaderBookPageContainer>
      {data && <BookReview data={data} />}
    </>
  );
};

export default Book;
