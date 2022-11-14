import '../styles/global-style.ts'
import type { AppContext, AppInitialProps, AppProps } from 'next/app'
import * as React from 'react'
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../styles/theme';
import { GlobalStyle } from '../styles/global-style';
import Layout from '../components/layout';
import BackImage from '../components/back-image';
import ThemeNavigation from '../components/theme-nav';
import { RecoilRoot } from 'recoil';
import Date from '../components/date';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from "react-query/devtools";

export default function App({ Component, pageProps }: AppProps) {
  const queryClientRef = React.useRef<QueryClient>()
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }
  const [ isLightTheme, setIsLightTheme ] = React.useState(true);
  const changeTheme = (value: boolean) => {
      setIsLightTheme(value);
  }
  return (
    <RecoilRoot>
      <ThemeProvider theme={ isLightTheme ? lightTheme : darkTheme }>
        <QueryClientProvider client={queryClientRef.current}>
          <Hydrate state={pageProps.dehydratedState}>
            <GlobalStyle/>
            <Layout>
              <BackImage/>
              <Component {...pageProps} />
              <ThemeNavigation changeTheme={changeTheme}/>
              <Date/>
            </Layout>
          </Hydrate>
          {/* devTool 설치 */}
          <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
      </ThemeProvider>
    </RecoilRoot>
  )
}

App.getInitialProps = async ({ Component, ctx }: AppContext): Promise<AppInitialProps> => {
  let pageProps = {}
  if(Component.getInitialProps){
    pageProps = await Component.getInitialProps(ctx)
  }
  return { pageProps }
}