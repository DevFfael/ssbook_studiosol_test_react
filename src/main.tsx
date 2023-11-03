import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Global from './style/global.ts';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme.ts';
import { client } from './api/index.ts';
import { ApolloProvider } from '@apollo/client';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <App />
        <Global />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
);
