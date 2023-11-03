import {
  BookAuthor,
  BookCard,
  BookImage,
  BookListContainer,
  BookTitle,
  InfoContainer,
} from './style';
import { Link } from 'react-router-dom';
import { GET_FAVORITE_BOOKS } from '../../api';
import { useQuery } from '@apollo/client';
import Loading from '../Loading';

interface IBook {
  id: string;
  name: string;
  cover: string;
  author: {
    name: string;
  };
}

const BookFavoriteList = () => {
  const { loading, data } = useQuery(GET_FAVORITE_BOOKS);

  if (loading) return <Loading />;
  return (
    <BookListContainer $length={data && data.favoriteBooks.length}>
      {data &&
        data.favoriteBooks.map((book: IBook) => (
          <Link
            key={book.id}
            to={`book/${book.id}`}
            style={{ textDecoration: 'none' }}
          >
            <BookCard>
              <BookImage src={book.cover} alt="Capa livro" />
              <InfoContainer>
                <BookTitle>{book.name}</BookTitle>
                <BookAuthor>{book.author.name}</BookAuthor>
              </InfoContainer>
            </BookCard>
          </Link>
        ))}
    </BookListContainer>
  );
};

export default BookFavoriteList;
