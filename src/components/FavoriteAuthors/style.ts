import styled from 'styled-components';

export const FavoriteAuthorsContainer = styled.div`
  margin: 30px 0px 0 20px;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-right: 172px;
  }
`;

export const Title = styled.h2`
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: ${(props) => props.theme.colors.text};
`;

export const ViewAll = styled.a`
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #6331c4;
  }
`;

export const AuthorsListContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 24px;
  padding-top: 20px;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-right: 172px;
  }
`;

export const AuthorCard = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  gap: 20px;
  min-width: 296px;
  height: 68px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
`;

export const AuthorImage = styled.img`
  width: 68px;
  height: 68px;
  border-radius: 8px;
  object-fit: cover;
`;

export const AuthorInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AuthorName = styled.span`
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 5px;
`;

export const AuthorBooks = styled.span`
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  color: ${(props) => props.theme.colors.secondaryText};
`;
