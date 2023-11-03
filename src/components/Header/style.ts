import styled from 'styled-components';

export const HeaderContainer = styled.header<{ $disabled?: boolean }>`
  width: 100%;
  border-radius: 0px 0px 32px 0px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.colors.white};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: calc(100% - 140px);
    padding: 12px 32px 12px 172px;
  }
`;

export const HeaderFlexArea = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  align-items: center;
  justify-content: start;
  gap: 24px;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 12px 20px;
    justify-content: space-between;
  }
`;

export const SearchInputContainer = styled.div`
  width: 100%;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const ActionCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 12px;
  color: ${(props) => props.theme.colors.text};
  & svg {
    font-size: 24px;
  }
`;

export const TextCard = styled.p`
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

export const UserInfo = styled.div`
  grid-column: 4;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  padding-left: 24px;
  border-left: 1px solid #e4e4e4;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 0;
    border: none;
  }
`;

export const UserName = styled.p`
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: ${(props) => props.theme.colors.text};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const TabsArea = styled.div`
  display: block;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;
