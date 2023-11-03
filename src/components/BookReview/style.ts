import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 24px;
  margin: 24px 172px 0 172px;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
    margin: 0;
    position: relative;
  }
`;

export const HeaderMobile = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 153px;
  background-image: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 100%);
  color: #fff;
  padding: 20px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const HeaderMobileAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SectionText = styled.div`
  display: flex;
  flex-direction: column;
  top: -50px;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    position: absolute;
    top: 50%;
    left: 0;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 32px 0 0 0;
    padding: 32px 20px 60px 20px;
  }
`;

export const ImageBook = styled.img`
  width: 296px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 8px;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    border-radius: 0;
  }
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

export const FavoriteMobile = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  & svg {
    font-size: 24px;
    color: ${(props) => props.theme.colors.text};
    cursor: pointer;

    &:hover :active {
      color: ${(props) => props.theme.colors.primary};
    }

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      display: none;
    }
  }
`;

export const Title = styled.h1`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: ${(props) => props.theme.fontSizes.xxl};
  color: ${(props) => props.theme.colors.text};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fontSizes.lg};
  }
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  color: ${(props) => props.theme.colors.text};
  line-height: 23px;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fontSizes.md};
  }
`;

export const AuthorName = styled.span`
  font-weight: ${(props) => props.theme.fontWeight.regular};
  font-size: 24px;
  color: ${(props) => props.theme.colors.secondaryText};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
`;

export const AboutTitle = styled.h2`
  font-weight: ${(props) => props.theme.fontWeight.bold};
  font-size: ${(props) => props.theme.fontSizes.xl};
  color: ${(props) => props.theme.colors.text};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fontSizes.lg};
  }
`;

export const ReviewContainer = styled.div`
  margin: 48px 0 40px 0;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin: 20px 0;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 48px 0 108px 0;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin: 20px 0;
  }
`;
