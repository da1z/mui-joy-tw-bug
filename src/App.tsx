import './index.css';
import Demo from './demo';
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Demo />
    </StyledEngineProvider>
  );
}

export default App;
