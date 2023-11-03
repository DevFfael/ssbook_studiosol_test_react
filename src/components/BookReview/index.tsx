import PhotoBook from '../../assets/image.png';
import {
  AboutContainer,
  AboutTitle,
  ActionCard,
  ActionContainer,
  AuthorName,
  Container,
  ImageBook,
  ReviewContainer,
  Section,
  Text,
  TextCard,
  Title,
  TitleContainer,
} from './style';
import { MdAddCircle, MdDownload, MdShare } from 'react-icons/md';

const BookReview = () => {
  return (
    <Container>
      <Section>
        <ImageBook src={PhotoBook} />
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
      <Section>
        <TitleContainer>
          <Title>
            O duque e eu (Os Bridgertons – Livro 1): O livro de Daphne
          </Title>
          <AuthorName>Raffael Oliveira</AuthorName>
        </TitleContainer>
        <ReviewContainer>
          <Text>
            Simon Basset, o irresistível duque de Hastings, acaba de retornar a
            Londres depois de seis anos viajando pelo mundo. Rico, bonito e
            solteiro, ele é um prato cheio para as mães da alta sociedade, que
            só pensam em arrumar um bom partido para suas filhas. Simon, porém,
            tem o firme propósito de nunca se casar. Assim, para se livrar das
            garras dessas mulheres, precisa de um plano infalível. É quando
            entra em cena Daphne Bridgerton, a irmã mais nova de seu melhor
            amigo. Apesar de espirituosa e dona de uma personalidade marcante,
            todos os homens que se interessam por ela são velhos demais, pouco
            inteligentes ou destituídos de qualquer tipo de charme. E os que têm
            potencial para ser bons maridos só a veem como uma boa amiga. A
            ideia de Simon é fingir que a corteja. Dessa forma, de uma tacada
            só, ele conseguirá afastar as jovens obcecadas por um marido e
            atrairá vários pretendentes para Daphne. Afinal, se um duque está
            interessado nela, a jovem deve ter mais atrativos do que aparenta.
          </Text>
        </ReviewContainer>
        <AboutContainer>
          <AboutTitle>Sobre o Autor</AboutTitle>
          <Text>
            JULIA QUINN começou a trabalhar em seu primeiro romance um mês de -
            pois de terminar a faculdade e nunca mais parou de escrever. Seus
            livros foram traduzidos para 37 idiomas e, no Brasil,
          </Text>
        </AboutContainer>
      </Section>
    </Container>
  );
};

export default BookReview;
