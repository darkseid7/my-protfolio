import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

import styled from "styled-components";

const MainContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <MainContainer>
        <Header />
        <Home />
        <Footer />
      </MainContainer>
    </>
  );
}

export default App;
