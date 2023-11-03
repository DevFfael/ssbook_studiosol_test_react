import React from 'react';
import { FavoritesBookContainer, SectionHeader, Title, ViewAll } from './style';
import BookList from './BookList';

const FavoritesBooks = () => {
  return (
    <FavoritesBookContainer>
      <SectionHeader>
        <Title>Livros Favoritos</Title>
        <ViewAll>ver todos</ViewAll>
      </SectionHeader>
    </FavoritesBookContainer>
  );
};

export default FavoritesBooks;
