import { store } from '@/store/store';
import '@/styles/globals.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { theme } from '../../theme';
export default function App({ Component, pageProps }: AppProps) {
  return  <Provider store={store}>


 <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
</Provider>
  
 
}
