
import { Container, Typography } from '@mui/material';
import StyledButton from './components/StyledButton';

function App() {
  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        Hello, Material UI!
      </Typography>
      <StyledButton variant="contained" color="primary">
        Click Me
      </StyledButton>
    </Container>
  );
}

export default App;
