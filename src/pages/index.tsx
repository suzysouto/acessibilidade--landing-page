import React, { useState, useEffect } from 'react';
import { Page, ContentPage, Footer, Header } from "../components/pages";

const Home = () => {
  const [pageTitle, setPageTitle] = useState('Acessibilidade');
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <Page>
      <Header text={"Logo"} />
      <ContentPage text={"Content"} />
      <Footer text={"Footer"} />
    </Page>
  )
}

export default Home
