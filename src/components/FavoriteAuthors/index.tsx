import AuthorsList from './AuthorsList';
import {
  FavoriteAuthorsContainer,
  SectionHeader,
  Title,
  ViewAll,
} from './style';

const FavoriteAuthors = () => {
  return (
    <FavoriteAuthorsContainer>
      <SectionHeader>
        <Title>Livros Favoritos</Title>
        <ViewAll>ver todos</ViewAll>
      </SectionHeader>
      <AuthorsList />
    </FavoriteAuthorsContainer>
  );
};

export default FavoriteAuthors;
