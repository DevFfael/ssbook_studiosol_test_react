import styled from 'styled-components';

export const HeaderContainer = styled.header<{ $disabled?: boolean }>`
  width: 100%;
  border-radius: 0px 0px 32px 0px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.colors.white};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: calc(100% - 140px);
    padding: 12px 0 12px 172px;
  }
`;

export const HeaderFlexArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 24px;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 12px 20px;
    justify-content: space-between;
  }
`;

export const TabsArea = styled.div`
  display: block;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;
