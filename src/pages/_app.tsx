import '@/assets/styles/globals'
import type { AppProps } from 'next/app'
import styled from '@emotion/styled'
import theme from '../styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  const Page = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: ${theme.colors.background};
    color: ${theme.colors.primary};
    margin-top: 4rem;
    overflow-x: hidden;
  `

  const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
  `

  return (
    <Page>
      <Main>
        <Component {...pageProps} />
      </Main>
    </Page>
  )
} 