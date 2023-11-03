import {
  AboutContainer,
  AboutTitle,
  ActionCard,
  ActionContainer,
  AuthorName,
  Container,
  FavoriteMobile,
  ImageBook,
  ReviewContainer,
  Section,
  SectionText,
  Text,
  TextCard,
  Title,
  TitleContainer,
} from './style';
import {
  MdAddCircle,
  MdDownload,
  MdOutlineFavoriteBorder,
  MdShare,
} from 'react-icons/md';

interface IBook {
  data: {
    book: {
      id: string;
      name: string;
      cover: string;
      description: string;
      author: {
        name: string;
      };
    };
  };
}

const BookReview = ({ data }: IBook) => {
  return (
    <Container>
      <Section>
        <ImageBook src={data.book.cover} />
        <ActionContainer>
          <ActionCard>
            <MdAddCircle />
            <TextCard>Favoritar</TextCard>
          </ActionCard>
          <ActionCard>
            <MdShare />
            <TextCard>Compartilhar</TextCard>
          </ActionCard>
          <ActionCard>
            <MdDownload />
            <TextCard>Salvar em uma lista</TextCard>
          </ActionCard>
        </ActionContainer>
      </Section>
      <SectionText>
        <TitleContainer>
          <FavoriteMobile>
            <Title>{data.book.name}</Title>
            <MdOutlineFavoriteBorder />
          </FavoriteMobile>
          <AuthorName>{data.book.author.name}</AuthorName>
        </TitleContainer>
        <ReviewContainer>
          <Text>{data.book.description}</Text>
        </ReviewContainer>
        <AboutContainer>
          <AboutTitle>Sobre o Autor</AboutTitle>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            exercitationem iusto, explicabo odio ex optio perferendis veniam
            soluta qui, ullam iure? Alias maxime itaque libero, necessitatibus
            sunt quis soluta aliquid, omnis nesciunt doloremque tempore impedit
            vitae dolorum dolorem quia, dolores dignissimos nam. Vel consequatur
            nesciunt fugit cumque id eos magni voluptate, perferendis
            repudiandae harum assumenda officiis nostrum dolor pariatur beatae
            nihil nulla quasi ipsum vitae. Possimus temporibus perspiciatis
            consequatur deserunt, in dolorum! Eligendi adipisci, possimus
            sapiente voluptatum illo quaerat? Itaque, tempora ex? Sed reiciendis
            porro cum rem, amet sit harum asperiores, officiis neque aliquid
            expedita nemo voluptatum facere autem. Quidem?
          </Text>
        </AboutContainer>
      </SectionText>
    </Container>
  );
};

export default BookReview;
