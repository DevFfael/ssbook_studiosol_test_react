import styled from 'styled-components';
import { CircularProgress } from '@mui/material';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;

  svg {
    color: #a076f2;
  }
`;

const Loading = () => {
  return (
    <Container>
      <CircularProgress />
    </Container>
  );
};

export default Loading;
