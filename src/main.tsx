import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { StyledAppShell } from './StyledAppShell.ts'
import { GlobalStyles } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles styles={{ body: { margin: 0 } }} />
    <StyledAppShell display={'block'}>
      <App />
    </StyledAppShell>
  </React.StrictMode>,
)
