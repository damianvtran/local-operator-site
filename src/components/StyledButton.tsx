
import { Button, ButtonProps } from '@mui/material';
import styled from 'styled-components';

const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  margin: theme.spacing(1),
  padding: theme.spacing(2),
}));

export default StyledButton;
