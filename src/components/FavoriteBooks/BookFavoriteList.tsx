import {
  BookAuthor,
  BookCard,
  BookImage,
  BookListContainer,
  BookTitle,
} from './style';
import Image from '../../assets/image.png';

const BookFavoriteList = () => {
  return (
    <BookListContainer>
      <BookCard>
        <BookImage src={Image} alt="Book 1" />
        <BookTitle>Book Title 2</BookTitle>
        <BookAuthor>Nome do autor</BookAuthor>
      </BookCard>
      <BookCard>
        <BookImage src={Image} alt="Book 1" />
        <BookTitle>Book Title 2</BookTitle>
        <BookAuthor>Nome do autor</BookAuthor>
      </BookCard>
      <BookCard>
        <BookImage src={Image} alt="Book 1" />
        <BookTitle>Book Title 2</BookTitle>
        <BookAuthor>Nome do autor</BookAuthor>
      </BookCard>
      <BookCard>
        <BookImage src={Image} alt="Book 1" />
        <BookTitle>Book Title 2</BookTitle>
        <BookAuthor>Nome do autor</BookAuthor>
      </BookCard>
    </BookListContainer>
  );
};

export default BookFavoriteList;
