import {
  AuthorBooks,
  AuthorCard,
  AuthorImage,
  AuthorInfoContainer,
  AuthorName,
  AuthorsListContainer,
} from './style';
import Author from '../../assets/Author.png';

const AuthorsList = () => {
  return (
    <AuthorsListContainer>
      <AuthorCard>
        <AuthorImage src={Author} alt="Book 1" />
        <AuthorInfoContainer>
          <AuthorName>Raffael Oliveira</AuthorName>
          <AuthorBooks>6 livros</AuthorBooks>
        </AuthorInfoContainer>
      </AuthorCard>
      <AuthorCard>
        <AuthorImage src={Author} alt="Book 1" />
        <AuthorInfoContainer>
          <AuthorName>Raffael Oliveira</AuthorName>
          <AuthorBooks>6 livros</AuthorBooks>
        </AuthorInfoContainer>
      </AuthorCard>
      <AuthorCard>
        <AuthorImage src={Author} alt="Book 1" />
        <AuthorInfoContainer>
          <AuthorName>Raffael Oliveira</AuthorName>
          <AuthorBooks>6 livros</AuthorBooks>
        </AuthorInfoContainer>
      </AuthorCard>
    </AuthorsListContainer>
  );
};

export default AuthorsList;
