import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';

const Theme: React.FC = ({ children }) => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return <ThemeProvider {...{ theme }}>{children}</ThemeProvider>;
};

export default Theme;
