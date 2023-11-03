import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 16px 172px;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const Text = styled.p`
  max-width: 158px;
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  color: ${(props) => props.theme.colors.white};
`;
