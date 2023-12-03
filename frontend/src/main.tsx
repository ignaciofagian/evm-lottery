/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { I18nProvider } from './contexts/I18nContext.tsx';
import Fonts from './theme/Fonts.tsx';
import chakraTheme from './theme';
import App from './App.tsx';
import * as buffer from "buffer";

// @ts-ignore
window.Buffer = buffer.Buffer;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nProvider>
      <ChakraProvider theme={chakraTheme} toastOptions={{ defaultOptions: { position: 'top' } }}>
        <Fonts />
        <App />
      </ChakraProvider>
    </I18nProvider>
  </React.StrictMode>,
);
