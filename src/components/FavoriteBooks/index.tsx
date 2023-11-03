import { FavoriteBooksContainer, SectionHeader, Title, ViewAll } from './style';
import BookFavoriteList from './BookFavoriteList';

const FavoriteBooks = () => {
  return (
    <FavoriteBooksContainer>
      <SectionHeader>
        <Title>Livros Favoritos</Title>
        <ViewAll>ver todos</ViewAll>
      </SectionHeader>
      <BookFavoriteList />
    </FavoriteBooksContainer>
  );
};

export default FavoriteBooks;
