import styled from 'styled-components';

export const FavoritesBookContainer = styled.div`
  margin: 32px 0 32px 20px;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
`;

export const Title = styled.h2`
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: ${(props) => props.theme.colors.text};
`;

export const ViewAll = styled.a`
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  cursor: pointer;
`;

export const BookListContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding-top: 20px;

  &::-webkit-scrollbar {
    display: none; /* Especifica a largura da barra de rolagem no Chrome e navegadores baseados em WebKit */
  }
`;

export const BookCard = styled.div`
  flex: 0 0 auto;
  width: 136px;
  height: 262px;
  border-radius: 8px;
  text-align: start;
`;

export const BookImage = styled.img`
  width: 100%;
  height: 198px;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const BookTitle = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  width: 100%;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: ${(props) => props.theme.colors.text};
`;

export const BookAuthor = styled.span`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  color: ${(props) => props.theme.colors.secondaryText};
  margin-top: 2px;
`;
