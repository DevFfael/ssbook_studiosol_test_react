import { useState } from 'react';
import { CategoryCard, CategoryListContainer } from './style';

const BookCategoryList = () => {
  const [category, setCategory] = useState<number>(0);

  return (
    <CategoryListContainer>
      <CategoryCard $active={category === 0} onClick={() => setCategory(0)}>
        Todos
      </CategoryCard>
      <CategoryCard $active={category === 1} onClick={() => setCategory(1)}>
        Romance
      </CategoryCard>
      <CategoryCard $active={category === 2} onClick={() => setCategory(2)}>
        Aventura
      </CategoryCard>
      <CategoryCard $active={category === 3} onClick={() => setCategory(3)}>
        Comédia
      </CategoryCard>
    </CategoryListContainer>
  );
};

export default BookCategoryList;
