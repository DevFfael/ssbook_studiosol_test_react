import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 24px;
  margin: 24px 172px 0 172px;
  /* position: absolute;
  top: 20px;
  right: 0; */
`;

// export const BackgroundBox = styled.div`
//   width: calc(100% - 140px);
//   height: calc(100% - 140px);
//   background-color: red;
//   margin-left: 140px;
//   border-radius: 32px 0 0 0;
//   position: relative;
//   bottom: -40px;
//   right: 0;
// `;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageBook = styled.img`
  width: 296px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 8px;
`;

export const ActionContainer = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 13px;
  margin-top: 20px;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const ActionCard = styled.div`
  display: flex;
  height: 48px;
  align-items: center;
  justify-content: start;
  gap: 12px;
  color: ${(props) => props.theme.colors.text};
  & svg {
    font-size: 24px;
  }
`;

export const TextCard = styled.p`
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled.h1`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: ${(props) => props.theme.fontSizes.xxl};
  color: ${(props) => props.theme.colors.text};
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  color: ${(props) => props.theme.colors.text};
  line-height: 23px;
`;

export const AuthorName = styled.span`
  font-weight: ${(props) => props.theme.fontWeight.regular};
  font-size: 24px;
  color: ${(props) => props.theme.colors.secondaryText};
`;

export const AboutTitle = styled.h2`
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: ${(props) => props.theme.fontSizes.xl};
  color: ${(props) => props.theme.colors.text};
`;

export const ReviewContainer = styled.div`
  margin: 48px 0 40px 0;
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 48px 0 108px 0;
`;
