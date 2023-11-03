import styled from 'styled-components';

export const TabWrapper = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
`;

export const TabItem = styled.div<{ $active?: boolean }>`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  padding: 10px 10px;
  cursor: pointer;
  border-bottom: ${(props) =>
    props.$active ? `4px solid ${props.theme.colors.primary}` : 'none'};

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;
