import React, { useState, useEffect } from 'react';
import Container from "../components/common/Container";
import { Content, ContentPage, Footer, Header } from "../components/pages";

const Home = () => {
  const [pageTitle, setPageTitle] = useState('Acessibilidade');
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <Content>
      <Container>
        <Header text={"Header"} />
        <ContentPage text={"Content"} />
        <Footer text={"Footer"} />
      </Container>
    </Content>
  )
}

export default Home
