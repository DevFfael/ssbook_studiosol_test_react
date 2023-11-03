import { LibraryContainer, SectionHeader, Title } from './style';
import BookCategoryList from './BookCategoryList';
import BookList from './BookList';

const Library = () => {
  return (
    <LibraryContainer>
      <SectionHeader>
        <Title>Biblioteca</Title>
      </SectionHeader>
      <BookCategoryList />
      <BookList />
    </LibraryContainer>
  );
};

export default Library;
