import styled from 'styled-components';

export const FavoriteBooksContainer = styled.div`
  margin: 32px 0 32px 20px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin: 0 172px 32px 172px;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-right: 0;
  }
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

  &:hover {
    color: #6331c4;
  }
`;

export const BookListContainer = styled.div<{ $length: number }>`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => props.$length},
    minmax(136px, 1fr)
  );
  gap: 20px;
  overflow-x: auto;
  padding-top: 20px;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(
      ${(props) => props.$length},
      minmax(200px, 1fr)
    );
  }
`;

export const BookCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 136px;
  height: 100%;
  border-radius: 8px;
  text-align: start;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
  }
`;

export const BookImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const InfoContainer = styled.div``;

export const BookTitle = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  width: 100%;
  height: 36px;
  line-height: 18px;
  vertical-align: bottom;
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: ${(props) => props.theme.colors.text};
`;

export const BookAuthor = styled.span`
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  color: ${(props) => props.theme.colors.secondaryText};
  margin-top: 2px;
`;
