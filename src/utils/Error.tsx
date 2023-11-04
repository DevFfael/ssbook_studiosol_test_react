import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.colors.secondaryText};
`;

const Error = () => {
  return <Container>Não foi possível carregar esse conteúdo :(</Container>;
};

export default Error;
