import React from 'react';
import { Page, ContentPage, Footer, Header } from "../components/pages";
import Head from 'next/head';

const Home = () => {

  return (
    <>
      <Head>
        <title>Acessibilidade | Página Inicial</title>
      </Head>
      <Page>
        <Header text={'Logo'} />
        <ContentPage />
        <Footer text={'Desenvolvido por Suzane'} />
      </Page>    
    </>
  )
}

export default Home
