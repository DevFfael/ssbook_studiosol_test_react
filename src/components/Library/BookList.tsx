import {
  BookAuthor,
  BookCard,
  BookImage,
  BookInfoContainer,
  BookListContainer,
  BookName,
} from './style';
import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../../api';
import Loading from '../../utils/Loading';
import { Link } from 'react-router-dom';
import Error from '../../utils/Error';

interface IBook {
  id: string;
  name: string;
  cover: string;
  author: {
    name: string;
  };
}

const BookList = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <Loading />;
  if (error) return <Error />;
  return (
    <BookListContainer>
      {data &&
        data.allBooks.map((book: IBook) => (
          <Link
            key={book.id}
            to={`book/${book.id}`}
            style={{ textDecoration: 'none' }}
          >
            <BookCard>
              <BookImage src={book.cover} />
              <BookInfoContainer>
                <BookName>{book.name}</BookName>
                <BookAuthor>{book.author.name}</BookAuthor>
              </BookInfoContainer>
            </BookCard>
          </Link>
        ))}
    </BookListContainer>
  );
};

export default BookList;
