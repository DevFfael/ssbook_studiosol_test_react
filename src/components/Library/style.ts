import styled from 'styled-components';

export const LibraryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 30px 0 0 20px;
`;

export const SectionHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
`;

export const Title = styled.h2`
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: ${(props) => props.theme.colors.text};
`;

export const CategoryListContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 8px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CategoryCard = styled.button<{ $active?: boolean }>`
  padding: 6px 16px;
  border-radius: 16px;
  border: 1px solid #e0e0e0;
  color: ${(props) =>
    props.$active
      ? props.theme.colors.white
      : props.theme.colors.secondaryText};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  line-height: 20px;
  letter-spacing: 0.5px;
  background: ${(props) =>
    props.$active ? props.theme.colors.primary : 'none'};
`;

export const BookListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  margin-right: 20px;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
    margin-right: 172px;
  }
`;

export const BookCard = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  gap: 20px;
  width: 100%;
  padding: 1px;
  border-radius: 8px;
`;

export const BookImage = styled.img`
  width: 48px;
  height: 70px;
  border-radius: 8px;
  object-fit: cover;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 68px;
    height: 100px;
  }
`;

export const BookInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BookName = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: ${(props) => props.theme.colors.text};
  line-height: 18px;
  margin-bottom: 5px;
`;

export const BookAuthor = styled.span`
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  color: ${(props) => props.theme.colors.secondaryText};
`;
