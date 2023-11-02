import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 56px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.08);
  background-color: ${(props) => props.theme.colors.white};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const NavigationButton = styled(Link)<{ $active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) =>
    props.$active ? props.theme.colors.primary : props.theme.colors.secondary};
  text-decoration: none;
  font-size: 10px;

  svg {
    font-size: 26px;
  }
`;
