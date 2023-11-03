import { FavoriteBooksContainer, SectionHeader, Title, ViewAll } from './style';
import BookList from './BookList';

const FavoriteBooks = () => {
  return (
    <FavoriteBooksContainer>
      <SectionHeader>
        <Title>Livros Favoritos</Title>
        <ViewAll>ver todos</ViewAll>
      </SectionHeader>
      <BookList />
    </FavoriteBooksContainer>
  );
};

export default FavoriteBooks;
