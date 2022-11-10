import '../styles/global-style.ts'
import type { AppProps } from 'next/app'
import * as React from 'react'
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../styles/theme';
import { GlobalStyle } from '../styles/global-style';
import Layout from '../components/layout';
import BackImage from '../components/back-image';
import ThemeNavigation from '../components/theme-nav';
import { RecoilRoot } from 'recoil';
import Date from '../components/date';

export default function App({ Component, pageProps }: AppProps) {
  const [isLightTheme, setIsLightTheme] = React.useState(true);
  const changeTheme = (value: boolean) => {
      setIsLightTheme(value);
  }
  return (
    <RecoilRoot>
      <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
        <GlobalStyle/>
        <Layout>
          <BackImage/>
          <Component {...pageProps} />
          <ThemeNavigation changeTheme={changeTheme}/>
          <Date/>
        </Layout>
      </ThemeProvider>
    </RecoilRoot>
  )
}