import styled from 'styled-components';
import { CategoryCard, CategoryListContainer } from './style';

const BookCategoryList = () => {
  return (
    <CategoryListContainer>
      <CategoryCard $active>Todos</CategoryCard>
      <CategoryCard>Romance</CategoryCard>
      <CategoryCard>Aventura</CategoryCard>
      <CategoryCard>Comédia</CategoryCard>
    </CategoryListContainer>
  );
};

export default BookCategoryList;
