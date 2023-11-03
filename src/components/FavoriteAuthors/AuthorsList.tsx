import {
  AuthorBooks,
  AuthorCard,
  AuthorImage,
  AuthorInfoContainer,
  AuthorName,
  AuthorsListContainer,
} from './style';
import { useQuery } from '@apollo/client';
import { GET_FAVORITE_AUTHORS } from '../../api';
import Loading from '../Loading';

interface IAuthor {
  id: string;
  name: string;
  picture: string;
  isFavorite: boolean;
  books: {
    id: string;
  }[];
}

const AuthorsList = () => {
  const { loading, data } = useQuery(GET_FAVORITE_AUTHORS);

  if (loading) return <Loading />;
  return (
    <AuthorsListContainer>
      {data &&
        data.favoriteAuthors.map((author: IAuthor) => (
          <AuthorCard key={author.id}>
            <AuthorImage src={author.picture} alt="Foto do autor" />
            <AuthorInfoContainer>
              <AuthorName>{author.name}</AuthorName>
              <AuthorBooks>{`${author.books.length} ${
                author.books.length > 1 ? 'livros' : 'livro'
              }`}</AuthorBooks>
            </AuthorInfoContainer>
          </AuthorCard>
        ))}
    </AuthorsListContainer>
  );
};

export default AuthorsList;
