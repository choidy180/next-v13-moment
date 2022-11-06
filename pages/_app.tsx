import '../styles/global-style.ts'
import type { AppProps } from 'next/app'
import * as React from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../styles/theme';
import { GlobalStyle } from '../styles/global-style';
import Layout from '../components/layout';
import BackImage from '../components/back-image';

export default function App({ Component, pageProps }: AppProps) {
  const [isLightTheme, setIsLightTheme] = React.useState(true);
  const changeTheme = () => {
      setIsLightTheme(!isLightTheme);
  }
  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <GlobalStyle/>
      <Layout>
        <BackImage/>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}